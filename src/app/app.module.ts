import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MuroComponent } from './muro/muro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PublicationNormalComponent } from './components/publication-normal/publication-normal.component';
import { PublicationSlideComponent } from './components/publication-slide/publication-slide.component';
import { NavComponent } from './components/nav/nav.component';
import {NgToastModule} from 'ng-angular-popup';

@NgModule({
  declarations: [
    AppComponent,
    MuroComponent,
    PublicationNormalComponent,
    PublicationSlideComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
