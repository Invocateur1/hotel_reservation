import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../models/Booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  url="http://localhost:5000/api/bookings";

  constructor(private http:HttpClient) {}

  getAuthHeaders(){
    if(typeof window!=='undefined'){
    const user=JSON.parse(localStorage.getItem('User')||'{}');
    return new HttpHeaders({'Authorization':`Bearer ${user.token}`});}
    return new HttpHeaders();
  }

  bookHotel(book:Booking){
    return this.http.post<Booking>(this.url,book,{headers : this.getAuthHeaders()});
  }

  
  deleteBooking(id:string){
    return this.http.delete(this.url+'/'+id, { headers: this.getAuthHeaders() });
  }

  getBooking(){
    return this.http.get<Booking[]>(this.url,{headers : this.getAuthHeaders()});
  }
}
