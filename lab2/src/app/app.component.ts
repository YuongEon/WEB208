import { Component } from '@angular/core';
import { Employee } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab2';

  employees : Employee[] = [
    {
      'id': 1,
    'firstName': 'yuong',
    'lastName': 'eon',
    'birthDate': '20-5-2003',
    'phoneNumber': '0985108503',
    'gender': 'nam',
    'company': 'Meta',
    'salary': 1000000000
    }
  ]
}
