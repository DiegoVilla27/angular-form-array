import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithoutTextComponent } from './form-without-text.component';

describe('FormWithoutTextComponent', () => {
  let component: FormWithoutTextComponent;
  let fixture: ComponentFixture<FormWithoutTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWithoutTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWithoutTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
