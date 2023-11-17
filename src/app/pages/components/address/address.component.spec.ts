import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AddressComponent } from "./address.component";
import { MessageAlertModule } from "../../../components/message-alert/message-alert.module";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule
} from "@angular/forms";

describe("AddressComponent", () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddressComponent],
      imports: [FormsModule, ReactiveFormsModule, MessageAlertModule]
    }).compileComponents();
    formBuilder = TestBed.inject(FormBuilder);
    const formGroup: FormGroup = formBuilder.group({
      address: [""]
    });
    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;
    component.address = formGroup;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
