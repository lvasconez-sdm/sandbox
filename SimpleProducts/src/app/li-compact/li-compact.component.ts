import { Component, OnInit } from '@angular/core';

import { LiBaseComponent } from './../li-base.component';

@Component({
  selector: 'app-li-compact',
  templateUrl: './li-compact.component.html',
  styleUrls: ['./li-compact.component.scss']
})
export class LiCompactComponent extends LiBaseComponent implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit() {
  }
}
