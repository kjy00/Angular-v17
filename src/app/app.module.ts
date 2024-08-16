import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, NgFor, UpperCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import HeroDetailComponent from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    UpperCasePipe,
    FormsModule,
    NgFor,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
