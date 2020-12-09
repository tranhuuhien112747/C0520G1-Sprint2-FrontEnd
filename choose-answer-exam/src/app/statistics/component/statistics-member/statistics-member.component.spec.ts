import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsMemberComponent } from './statistics-member.component';

describe('StatisticsMemberComponent', () => {
  let component: StatisticsMemberComponent;
  let fixture: ComponentFixture<StatisticsMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
