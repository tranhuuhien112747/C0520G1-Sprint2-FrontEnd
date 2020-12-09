import { TestBed } from '@angular/core/testing';

import { ImportQuizService } from './import-quiz.service';

describe('ImportQuizService', () => {
  let service: ImportQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
