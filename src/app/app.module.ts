import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles/roles.component';
import { FormWithTextComponent } from './form-with-text/form-with-text.component';
import { FormWithoutTextComponent } from './form-without-text/form-without-text.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';

@NgModule({
  declarations: [
    AppComponent,
    RolesComponent,
    FormWithTextComponent,
    FormWithoutTextComponent,
    ErrorMsgComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
