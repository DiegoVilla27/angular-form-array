import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { IValidation } from "../../../components/error-msg/error-msg.component";

@Component({
  selector: "app-address",
  templateUrl: "./address.component.html",
  styleUrl: "./address.component.scss"
})
export class AddressComponent {
  @Input() address!: FormGroup;
  @Input() index!: number;
  @Input() validations!: IValidation[];
  @Output() deleteAddress: EventEmitter<number> = new EventEmitter<number>();

  handlerDelete(index: number): void {
    this.deleteAddress.emit(index);
  }
}
