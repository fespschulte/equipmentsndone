import { Component } from '@angular/core';
import { CrudHttpService } from './crud-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-equipdone';
  constructor(private crudHttpService: CrudHttpService){}

}
