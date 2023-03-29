import { Component } from '@angular/core';
import { ROUTES_LIST } from './routes/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  routes = ROUTES_LIST;
}
