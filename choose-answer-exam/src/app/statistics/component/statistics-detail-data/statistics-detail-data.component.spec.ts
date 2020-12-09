import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsDetailDataComponent } from './statistics-detail-data.component';

describe('StatisticsDetailDataComponent', () => {
  let component: StatisticsDetailDataComponent;
  let fixture: ComponentFixture<StatisticsDetailDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsDetailDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsDetailDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
