import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../Services/user.service';
import { Router, RouterModule } from '@angular/router';
import { IUserLogin } from '../interfaces/IUserLogin';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
  user:IUserLogin={password:'',email:''};
  constructor(private usService:UserService,private rout:Router){ }
  
  submit(){
    this.usService.login(this.user).subscribe(()=>{
        this.rout.navigateByUrl('/');
      });
  }
}