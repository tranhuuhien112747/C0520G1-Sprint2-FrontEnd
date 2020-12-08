import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInfoAccountComponent } from './update-info-account.component';

describe('UpdateInfoAccountComponent', () => {
  let component: UpdateInfoAccountComponent;
  let fixture: ComponentFixture<UpdateInfoAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateInfoAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInfoAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
