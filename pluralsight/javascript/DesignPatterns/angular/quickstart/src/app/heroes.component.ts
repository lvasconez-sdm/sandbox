import {
    Component,
    OnInit
  } from '@angular/core';

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

    constructor(private heroService: HeroService) {
      this.heroes = [ ];
    }

    ngOnInit(): void {
      this.getHeroes();
    }

    getHeroes(): void {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
      //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }

     onSelect(hero: Hero): void {
       this.selectedHero = hero;
    }
}
