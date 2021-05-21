import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CoronaService } from './shared/corona.service';
import { HelpfulLinksComponent } from './helpful-links/helpful-links.component';
import { ChartsComponent } from './charts/charts.component';
import { GoogleChartsModule } from 'angular-google-charts'; 
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   
    HelpfulLinksComponent,
    ChartsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule,
    FormsModule
  ],
  providers: [CoronaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
