import { Component, OnInit } from '@angular/core';
import { HotelService } from '../Services/hotel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from '../models/Hotel';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Booking } from '../models/Booking';
import { BookingService } from '../Services/booking.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prohotel',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './prohotel.component.html',
  styleUrl: './prohotel.component.css'
})
export class ProhotelComponent implements OnInit{
    hotel!:Hotel;
    booking:Booking=new Booking();
    constructor(private book:BookingService,private hotelser:HotelService
      ,private ac:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.loadHotel();
  }
    
    loadHotel(){
      const hotelId=this.ac.snapshot.params['id'];
      this.hotelser.getHotelbyId(hotelId).subscribe(data=>this.hotel=data);
    }
    createBooking(){
      const user = JSON.parse(localStorage.getItem('User')!);
      if (!user?.token){ 
        Swal.fire('Please log in first!');
        this.router.navigate(['/login']);
        return;
      }
      this.booking.userId=user.id;
      this.booking.hotelId=this.hotel.id;

      this.book.bookHotel(this.booking).subscribe(
        {
          next:()=>{
            Swal.fire('Booking created successfully!');
          },
          error:(err)=>{
          if(err.error) Swal.fire(err.error);
          else Swal.fire("Something went wrong");
          
        }
      });
  }
}
