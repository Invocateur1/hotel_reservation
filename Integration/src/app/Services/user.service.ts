import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../models/User';
import { IUserLogin } from '../interfaces/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { IUserRegister } from '../interfaces/IUserRegister';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubj: BehaviorSubject<User>;
  public userObservable: Observable<User>;
  private url = "http://localhost:5000/api/users";

  constructor(private htcli: HttpClient) {
    const user = this.isBrowser() ? this.getUserFromLocalStorage() : new User();
    this.userSubj = new BehaviorSubject<User>(user);
    this.userObservable = this.userSubj.asObservable();
  }

  login(uLogin: IUserLogin) {
    return this.htcli.post<User>(this.url + "/login", uLogin).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubj.next(user);
          Swal.fire("Welcome to BookSmart! Login Successful");
        },
        error: (errorResponse) => {
          Swal.fire(errorResponse.error);
        }
      })
    );
  }
  register(userRegister:IUserRegister){
    return this.htcli.post<User>(this.url+"/register",userRegister).pipe(
      tap({
        next:(utser)=>{
          this.setUserToLocalStorage(utser);
          this.userSubj.next(utser);
          Swal.fire("Welcome to BookSmart!"+utser.name+" Register Successful");
        },
        error:(erroresponse)=>{
          Swal.fire(erroresponse.error);
        }
      })
    );
  }

  logout(){
    this.userSubj.next(new User());
    localStorage.removeItem('User');
    location.reload();
  }


  private setUserToLocalStorage(user: User) {
    if (this.isBrowser()) {
      localStorage.setItem("User", JSON.stringify(user));
    }
  }

  private getUserFromLocalStorage(): User {
    if (this.isBrowser()) {
      const userJson = localStorage.getItem("User");
      if (userJson) return JSON.parse(userJson) as User;
    }
    return new User();
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined';
  }
}
