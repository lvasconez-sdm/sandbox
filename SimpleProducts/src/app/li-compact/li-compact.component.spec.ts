import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiCompactComponent } from './li-compact.component';

describe('LiCompactComponent', () => {
  let component: LiCompactComponent;
  let fixture: ComponentFixture<LiCompactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiCompactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
