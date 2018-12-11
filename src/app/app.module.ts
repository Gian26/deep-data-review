import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule,Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ModalModule } from 'ngx-bootstrap/modal';


import { SharedModule } from './shared/shared.module';
import { Pagina2Component } from './pagina2/pagina2.component';

import { AppRouting } from './app.routing';
import { Pagina3Component } from './pagina3/pagina3.component';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    Pagina2Component,
    Pagina3Component
  ],
  imports: [
    BrowserModule,
    NgbModule,
    SharedModule,
    ModalModule.forRoot(),
    RouterModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{ }
