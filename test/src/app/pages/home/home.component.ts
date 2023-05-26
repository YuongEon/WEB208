import { Component } from '@angular/core';
import { products } from 'src/app/data/product';
import { Product } from 'src/app/interface/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  data: Product[] = products;
  dataFilter: Product[] = this.data;
  keyword: string = '';
  mess: string| null = null
  
  
  search(searchValue : string) : void{
    let searchData = this.data.filter((item) => item.name.includes(searchValue))
    if(searchData.length > 0){
      this.dataFilter = searchData
    } else {
      this.mess = 'khong co san pham nao trung khop'
      this.dataFilter = []
    }
  }


}
