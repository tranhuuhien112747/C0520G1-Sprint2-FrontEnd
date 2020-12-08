import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportQuizComponent } from './import-quiz.component';

describe('UploadFileComponent', () => {
  let component: ImportQuizComponent;
  let fixture: ComponentFixture<ImportQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
