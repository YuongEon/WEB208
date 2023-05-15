import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  inputValue : string  = '';
  filterValue : string  = '';

  search(){
    this.filterValue = this.inputValue
    this.inputValue = ''
  }
  
  
}
