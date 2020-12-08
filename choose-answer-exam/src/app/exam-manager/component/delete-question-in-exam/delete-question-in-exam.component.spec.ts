import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteQuestionInExamComponent } from './delete-question-in-exam.component';

describe('DeleteQuestionInExamComponent', () => {
  let component: DeleteQuestionInExamComponent;
  let fixture: ComponentFixture<DeleteQuestionInExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteQuestionInExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteQuestionInExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
