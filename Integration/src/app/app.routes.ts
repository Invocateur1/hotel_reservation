import { Routes } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { HomeComponent } from './home/home.component';
import { ProhotelComponent } from './prohotel/prohotel.component';
import { LoginComponent } from './login/login.component';
import { RegisterfComponent } from './registerf/registerf.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'listing',component:ListingComponent},
    {path:'',component:HomeComponent,pathMatch: 'full'},
    {path:'search/:searchTerm',component:ListingComponent},
    {path:'hotel/:id',component:ProhotelComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterfComponent}];
