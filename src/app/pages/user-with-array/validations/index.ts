import { IValidation } from "../../../components/message-alert/message-alert.component";

export interface IMessageAlertUser {
  name: IValidation[];
  age: IValidation[];
  address: IValidation[];
}

export const validation_messages: IMessageAlertUser = {
  "name": [{ type: "required", message: "Name is required" }],
  "age": [{ type: "required", message: "Age is required" }],
  "address": [{ type: "required", message: "Address is required" }]
};
