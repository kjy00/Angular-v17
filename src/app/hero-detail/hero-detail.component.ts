import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import HeroService from '../hero.service';
import { FormsModule } from '@angular/forms';
import { NgIf, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  imports: [FormsModule, UpperCasePipe, NgIf],
  standalone: true,
})
export default class HeroDetailComponent {
  @Input() hero?: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {}
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }
}
