interface IValidationContent {
  type: string;
  message: string;
}

export interface IValidation {
  name: IValidationContent[],
  role?: IValidationContent[],
  roles: IValidationContent[],
}