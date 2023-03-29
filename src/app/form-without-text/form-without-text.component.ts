import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { IValidation } from '../interfaces/validations.interfaces';
import { invalidInput, validInput } from '../utils/validation-input.utils';
import { validationsMessages, validators } from './validations';

@Component({
  selector: 'app-form-without-text',
  templateUrl: './form-without-text.component.html',
  styleUrls: ['./form-without-text.component.scss']
})
export class FormWithoutTextComponent implements OnInit {

  // FORMS
  public form!: FormGroup;

  // VALIDATIONS
  public invalidInput = invalidInput;
  public validInput = validInput;
  public validationsMessages: IValidation = validationsMessages;

  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this._fb.group({
      name: ['', [
        Validators.required,
        ...this.validationMinMax('name')
      ]],
      roles: this._fb.array([])
    });
  }

  addRole(): void {
    this.roles.push(this._fb.group({
      name: [
        '',
        [
          Validators.required,
          ...this.validationMinMax('roles')
        ]
      ]
    }));
    this.form.patchValue({ role: '' });
  }

  editRole(event: any): void {
    const { index, role } = event;
    this.removeRole(index);
    this.roles.insert(index, role);
  }

  removeRole(index: number): void {
    this.roles.removeAt(index);
  }

  handlerSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      console.log(this.form);
    }
  }

  validationMinMax(type: string): ValidatorFn[] {
    const TYPE_VALIDATOR = {
      'min': type === 'name' ? validators.name.min : validators.role.min,
      'max': type === 'name' ? validators.name.max : validators.role.max
    }
    return [
      Validators.minLength(TYPE_VALIDATOR.min),
      Validators.maxLength(TYPE_VALIDATOR.max)
    ];
  }

  get roles(): FormArray {
    return this.form.get('roles') as FormArray;
  }
}
