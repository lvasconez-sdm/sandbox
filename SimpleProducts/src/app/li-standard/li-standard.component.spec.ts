import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiStandardComponent } from './li-standard.component';

describe('LiStandardComponent', () => {
  let component: LiStandardComponent;
  let fixture: ComponentFixture<LiStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
