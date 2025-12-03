import { Component, } from '@angular/core';
import { UserService } from '../Services/user.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IUserRegister } from '../interfaces/IUserRegister';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registerf',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './registerf.component.html',
  styleUrl: './registerf.component.css'
})
export class RegisterfComponent{
  user:IUserRegister={name:'',password:'',email:''};
  constructor(private uservice:UserService,private router:Router) {}

  submit(){
    this.uservice.register(this.user).subscribe(()=>{
      this.router.navigateByUrl('/');
    })
  }
}
