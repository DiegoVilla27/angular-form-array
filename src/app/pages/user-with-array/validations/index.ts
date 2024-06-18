import { IErrorMsg } from "../../../components/error-msg/error-msg.component";

export const validations: IErrorMsg = {
  name: [{ type: "required", message: "Name is required" }],
  age: [{ type: "required", message: "Age is required" }],
  address: [{ type: "required", message: "Address is required" }]
};
