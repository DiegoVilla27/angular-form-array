import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AddressComponent } from "./pages/components/address/address.component";
import { UserWithArrayComponent } from "./pages/user-with-array/user-with-array.component";
import { ErrorMsgModule } from "./components/error-msg/error-msg.module";

@NgModule({
  declarations: [AppComponent, UserWithArrayComponent, AddressComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorMsgModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
