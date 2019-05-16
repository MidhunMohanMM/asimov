//@Angular Imports


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

//Custom component imports


// Route Declaration

const routes: Routes = [
  { path: '', component: HomeComponent }
];


//Route import and export

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
