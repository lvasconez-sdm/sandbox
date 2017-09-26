import { Component, NgModule } from '@angular/core';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

export class Hero {
  constructor(
    public id: number,
    public  name: string) { }
}

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
   title: string;
   myHero: Hero;
   heroes: Hero[];

   constructor() {
      this.title = 'Tour of Heroes';
      this.heroes = HEROES;
      this.myHero = this.heroes[0];
   }
}
