import { Injectable } from '@angular/core';
import { Hotel } from '../models/Hotel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  url="http://localhost:5000/api/hotels/"

  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get<Hotel[]>(this.url);
  }
  getAllFoodsBySearch(searchTerm:string){
    return this.http.get<Hotel[]>(this.url+"search/"+searchTerm);
  }
  getHotelbyId(id:string){
    return this.http.get<Hotel>(this.url+id);
  }
  createHotel(hotel:Hotel){
    return this.http.post<Hotel>(this.url+"ajout",hotel);
  }

}
