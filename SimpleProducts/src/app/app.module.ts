import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { VrComponent } from './vr/vr.component';
import { LiStandardComponent } from './li-standard/li-standard.component';
import { LiCompactComponent } from './li-compact/li-compact.component';

@NgModule({
  declarations: [
    AppComponent,
    VrComponent,
    LiStandardComponent,
    LiCompactComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [{ provide: 'Window', useValue: window }],
  bootstrap: [AppComponent]
})
export class AppModule { }
