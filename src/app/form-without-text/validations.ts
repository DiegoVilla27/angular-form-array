import { IValidation } from "../interfaces/validations.interfaces";

export interface IValidators {
  name: {
    min: number;
    max: number;
  };
  role: {
    min: number;
    max: number;
  }
};

export const validators: IValidators = {
  name: {
    min: 5,
    max: 15,
  },
  role: {
    min: 3,
    max: 20
  }
};

export const validationsMessages: IValidation = {
  name: [
    { type: 'required', message: 'Name is required' },
    { type: 'minlength', message: `Min = ${validators.name.min} characters` },
    { type: 'maxlength', message: `Max = ${validators.name.max} characters` }
  ],
  roles: [
    { type: 'required', message: 'Role is required' },
    { type: 'minlength', message: `Min = ${validators.role.min} characters` },
    { type: 'maxlength', message: `Max = ${validators.role.max} characters` }
  ]
};