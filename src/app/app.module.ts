import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//RUTAS
import { appRouting } from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './models/header/header.component';
import { HomeComponent } from './models/home/home.component';
import { BitacoraComponent } from './models/bitacora/bitacora.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, appRouting ],
  declarations: [ AppComponent, HeaderComponent, HomeComponent, BitacoraComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
