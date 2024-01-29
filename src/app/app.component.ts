import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-reusable-component';
  users = [
    { name: 'Yudha', age: 24, address: 'Jakarta' },
    { name: 'Bruce', age: 25, address: 'Jakarta' },
    { name: 'Tom', age: 26, address: 'Jakarta' },
  ];
}
