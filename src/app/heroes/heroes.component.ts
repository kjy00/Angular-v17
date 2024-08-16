import { Component, inject } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  providers: [HeroService],
})
export class HeroesComponent {
  heroes?: Hero;
  selectedHero?: Hero;
  constructor(heroService: HeroService) {}
  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
