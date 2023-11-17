import { Component, Input } from "@angular/core";
import { AbstractControl } from "@angular/forms";

export interface IValidation {
  type: string;
  message: string;
}

@Component({
  selector: "app-message-alert",
  templateUrl: "./message-alert.component.html",
  styleUrl: "./message-alert.component.scss"
})
export class MessageAlertComponent {
  @Input() list!: IValidation[];
  @Input() controlRef!: AbstractControl;
}
