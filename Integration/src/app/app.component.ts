import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { User } from './models/User';
import { UserService } from './Services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Integration';
  user!:User;
  constructor(private useService:UserService){
    useService.userObservable.subscribe((newUser)=>{
      this.user=newUser
    });
  }
  logout(){
    this.useService.logout();
  }

  get isAuth(){
    return this.user.token;
  }
}
