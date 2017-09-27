import {
  Component,
  OnInit
} from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [
    HeroService
  ]
})
export class AppComponent implements OnInit {
   title: string;
   selectedHero: Hero;
   heroes: Hero[];

  constructor(private heroService: HeroService) {
    this.title = 'Tour of Heroes';
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

   onSelect(hero: Hero): void {
     this.selectedHero = hero;
   }
}
