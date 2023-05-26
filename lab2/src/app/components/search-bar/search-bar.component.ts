import { UpperCasePipe } from '@angular/common';
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
    this.filterValue =  this.inputValue
    this.inputValue = ''
  }
  
  onHandleChange(newValue :string){
    console.log(newValue);
    this.filterValue = newValue
  }
  
}
