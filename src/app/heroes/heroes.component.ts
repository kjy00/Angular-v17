import { Component } from '@angular/core';
import { Hero } from '../hero';
import HeroService from '../hero.service';
import MessageService from '../message.service';
import HeroDetailComponent from '../hero-detail/hero-detail.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  imports: [HeroDetailComponent, NgFor, NgIf],
  providers: [HeroService],
  standalone: true,
})
export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  getHeroes() {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
