import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuestionInExamComponent } from './add-question-in-exam.component';

describe('AddQuestionInExamComponent', () => {
  let component: AddQuestionInExamComponent;
  let fixture: ComponentFixture<AddQuestionInExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQuestionInExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuestionInExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
