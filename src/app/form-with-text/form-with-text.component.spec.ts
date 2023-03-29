import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithTextComponent } from './form-with-text.component';

describe('FormWithTextComponent', () => {
  let component: FormWithTextComponent;
  let fixture: ComponentFixture<FormWithTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWithTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWithTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
