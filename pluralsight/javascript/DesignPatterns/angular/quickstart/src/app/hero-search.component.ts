import {
    Component,
    OnInit
 } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Hero } from './hero';
import { HeroSearchService } from './hero-search.service';

@Component({
    selector: 'hero-search',
    templateUrl: '/app/hero-search.component.html',
    styleUrls: [ '/app/hero-search.component.css' ],
    providers: [ HeroSearchService ]
})
export class HeroSearchComponent implements OnInit {

    heroesFound: Observable<Hero[]>;
    private searchTerms = new Subject<string>();

    constructor(private heroSearchService: HeroSearchService) {}

    search(heroName: string): void {
        this.searchTerms.next(heroName);
    }

    ngOnInit(): void {
        this.heroesFound = this.searchTerms
                            .debounceTime(300)
                            .distinctUntilChanged()
                            .switchMap(term => term
                                ? this.heroSearchService.search(term)
                                : Observable.of<Hero[]>([]))
                            .catch(error => {
                                console.log(error);
                                return Observable.of<Hero[]>([]);
                            });
    }
}
