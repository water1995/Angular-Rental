import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './component/Header/header.component';
import {RentalModule} from './rental/rental.module';

const routes : Routes = [
  {path:'',redirectTo:'/rentals',pathMatch:'full'}
]


@NgModule({
  declarations: [
    AppComponent,HeaderComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    RentalModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
