import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UserWithArrayComponent } from "./user-with-array.component";
import { MessageAlertModule } from "../../components/error-msg/error-msg.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

describe("UserWithArrayComponent", () => {
  let component: UserWithArrayComponent;
  let fixture: ComponentFixture<UserWithArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserWithArrayComponent],
      imports: [FormsModule, ReactiveFormsModule, MessageAlertModule]
    }).compileComponents();

    fixture = TestBed.createComponent(UserWithArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
