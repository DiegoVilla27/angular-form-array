import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormWithTextComponent } from './form-with-text/form-with-text.component';
import { FormWithoutTextComponent } from './form-without-text/form-without-text.component';
import { ROUTES_LIST } from './routes';

const routes: Routes = [
  { path: ROUTES_LIST.withText.path, component: FormWithTextComponent },
  { path: ROUTES_LIST.withoutText.path, component: FormWithoutTextComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
