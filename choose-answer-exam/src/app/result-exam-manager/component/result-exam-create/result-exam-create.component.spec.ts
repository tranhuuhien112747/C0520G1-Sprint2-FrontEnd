import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultExamCreateComponent } from './result-exam-create.component';

describe('ResultExamCreateComponent', () => {
  let component: ResultExamCreateComponent;
  let fixture: ComponentFixture<ResultExamCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultExamCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultExamCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
