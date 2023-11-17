import { Component } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IMessageAlertUser, validation_messages } from "./validations";

interface IAddress {
  address: string;
}

interface IUser {
  name: string;
  age: number;
  addresses: IAddress[];
}

const mock: IUser = {
  name: "Diego Villanueva",
  age: 31,
  addresses: [{ address: "Aben al abbar 2" }, { address: "Plaza de peixets 4" }]
};

@Component({
  selector: "app-user-with-array",
  templateUrl: "./user-with-array.component.html",
  styleUrl: "./user-with-array.component.scss"
})
export class UserWithArrayComponent {
  form!: FormGroup;
  validations: IMessageAlertUser = validation_messages;

  constructor(private _fB: FormBuilder) {
    this.buildData();
  }

  ngOnInit(): void {
    // this.loadData();
  }

  buildData(): void {
    this.form = this._fB.group({
      name: ["", Validators.required],
      age: ["", Validators.required],
      addresses: this._fB.array([])
    });
  }

  loadData(): void {
    this.form.patchValue({
      name: mock.name,
      age: mock.age
    });
    mock.addresses.forEach((address: IAddress) =>
      this.addAddress(address.address)
    );
  }

  addAddress(address?: string): void {
    this.addressesArray.push(
      this._fB.group({
        address: [address ?? "", Validators.required]
      })
    );
  }

  // editAddress(evt: { index: number, address: string }): void {
  //   const { index, address } = evt;
  //   this.deleteAddress(index);
  //   this.addressesArray.insert(index, address);
  // }

  deleteAddress(index: number): void {
    this.addressesArray.removeAt(index);
  }

  submit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      // console.log(this.form.value);
      alert("Send!");
    }
  }

  get addressesArray(): FormArray {
    return this.form.get("addresses") as FormArray;
  }

  get addressesForm(): FormGroup[] {
    return (this.form.controls["addresses"] as FormArray)
      .controls as FormGroup[];
  }
}
