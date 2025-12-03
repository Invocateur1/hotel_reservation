import { Component, OnInit } from '@angular/core';
import { Hotel } from '../models/Hotel';
import { HotelService } from '../Services/hotel.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.css'
})
export class ListingComponent implements OnInit{
  hotels!:Hotel[];
  id="";
    ngOnInit(): void {
      this.loadHotels();
      this.ac.params.subscribe(() => this.loadHotels());
  }
  constructor(private hs:HotelService,private ac:ActivatedRoute){}

   loadHotels() {
    const searchTerm = this.ac.snapshot.params['searchTerm'];

    if (searchTerm) {
      this.hs.getAllFoodsBySearch(searchTerm).subscribe(res=>this.hotels=res);
    } else {
      this.hs.getAll().subscribe(res=>this.hotels=res);
    }
  }
    
}
