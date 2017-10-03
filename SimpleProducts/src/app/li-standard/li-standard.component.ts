import { Component, OnInit } from '@angular/core';

import { LiBaseComponent } from './../li-base.component';

@Component({
  selector: 'app-li-standard',
  templateUrl: './li-standard.component.html',
  styleUrls: ['./li-standard.component.scss']
})
export class LiStandardComponent extends LiBaseComponent implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit() {
  }
}
