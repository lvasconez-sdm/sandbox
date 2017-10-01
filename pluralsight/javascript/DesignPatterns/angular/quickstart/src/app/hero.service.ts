import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

    heroesUrl = '/api/heroes';

    constructor(private http: Http) {}

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
                        .toPromise()
                        .then(response => response.json().data as Hero[])
                        .catch(this. handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error ocurred', error);
        return Promise.reject(error.message || error);
    }

    getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
                        .toPromise()
                        .then(response => response.json().data as Hero)
                        .catch(this.handleError);
    }

    getHeroesMock(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroesMockSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getHeroesMock()), 2000);
        });
    }

    getHeroMock(id: number): Promise<Hero> {
        return this.getHeroesMock()
                   .then(heroes => heroes.find(hero => hero.id === id));
    }
}
