import { Component } from '@angular/core';
import HeroService from '../hero.service';
import { Hero } from '../hero';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [NgFor, RouterLink],
  standalone: true,
})
export class DashboardComponent {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) {}
  ngOnInit() {
    this.getHeroes();
  }
  getHeroes() {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes.slice(1, 5);
    });
  }
}
