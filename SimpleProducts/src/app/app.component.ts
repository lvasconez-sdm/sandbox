import { Component, Inject } from '@angular/core';

import { LiBaseComponent } from './li-base.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent extends LiBaseComponent {
  layout: string = 'compact'

  constructor(@Inject('Window') private window: Window) {
    super()

    if (this.window.innerWidth < 576){
      this.layout = 'standard';
    }
  }

  toggleLayout() {
    this.layout = this.layout === 'standard' ? 'compact' : 'standard';
  }

  onStandardView() {
    this.layout = 'standard';
  }

  onCompactView() {
    this.layout = 'compact';
  }
}
