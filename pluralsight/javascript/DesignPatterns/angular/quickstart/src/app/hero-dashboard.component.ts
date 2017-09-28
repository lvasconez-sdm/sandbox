import {
    Component,
    OnInit
} from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'hero-dashboard',
    templateUrl: 'app/hero-dashboard.component.html',
    styleUrls: ['app/hero-dashboard.component.css']
})
export class HeroDashboardComponent implements OnInit {
    heroes: Hero[];

    constructor (private heroService: HeroService) {
        this.heroes = [];
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(0, 4));
    }
}