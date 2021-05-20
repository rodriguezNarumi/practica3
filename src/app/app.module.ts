import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { descripcionComponent } from './descripcionCSS/descripcioncss.component';
import { descripcion1Component } from './descripcionJS/descripcionjs.component';
import { descripcion2Component } from './descripcionHTML/descripcionhtml.component';
import { descripcion3Component } from './descripcionTS/descripcionts.component';
import { Html5Component } from './html5/html5.component';
import { NarutoComponent } from './naruto/naruto.component';

@NgModule({
  declarations: [
    AppComponent,
    descripcionComponent,
    descripcion1Component,
    descripcion2Component,
    descripcion3Component,
    Html5Component,
    NarutoComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
