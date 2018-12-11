import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRouting } from '../app.routing';

@NgModule({
  declarations: [
    // AppComponent,
    // CardComponent
  NavbarComponent
  ],
  exports:[
     NavbarComponent
    
  ],
  imports: [
    BrowserModule,
    CommonModule
    ,AppRouting
  ],
  providers: [],
})
export class SharedModule { }
