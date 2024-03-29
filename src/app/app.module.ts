import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainTollbalComponent } from './components/main-tollbal/main-tollbal.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportsModule } from './shared/material-imports/material-imports.module';

@NgModule({
  declarations: [
    AppComponent,
    MainTollbalComponent,
    MainPageComponent,
    CarouselComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
