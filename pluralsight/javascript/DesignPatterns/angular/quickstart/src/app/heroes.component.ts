import {
  Component,
  OnInit
} from '@angular/core';

import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private router: Router) {
    this.heroes = [ ];
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    // this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  goToDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  addHero(name: string): void {

    name = name.trim();

    if (!name) {
      return;
    }

    this.heroService.create(name)
    .then(hero => {
      this.heroes.push(hero);
      this.selectedHero = null;
    });
  }

  deleteHero(heroId: number): void {
    this.heroService.delete(heroId)
    .then(() => {
      this.heroes = this.heroes.filter(hero => hero.id !== heroId);

      if (this.selectedHero && this.selectedHero.id === heroId) {
        this.selectedHero = null;
      }
    });
  }
}
