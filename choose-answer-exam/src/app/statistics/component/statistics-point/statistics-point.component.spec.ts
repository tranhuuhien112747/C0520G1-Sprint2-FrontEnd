import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsPointComponent } from './statistics-point.component';

describe('StatisticsPointComponent', () => {
  let component: StatisticsPointComponent;
  let fixture: ComponentFixture<StatisticsPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
