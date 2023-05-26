import { Component, Input } from '@angular/core';
import { Employee } from 'src/app/models';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent {
  @Input() data: Employee[] | null = null;
  
}
