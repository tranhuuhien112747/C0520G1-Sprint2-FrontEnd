import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C0520g1Component } from './c0520g1.component';

describe('C0520g1Component', () => {
  let component: C0520g1Component;
  let fixture: ComponentFixture<C0520g1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C0520g1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C0520g1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
