import { Component } from '@angular/core';
import { products } from 'src/app/data/product';
import { Product } from 'src/app/interface/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dataInput: Product[] = products;
  data: Product[] = this.dataInput
  mess: string = ''
  

  search(searchValue:string){
    let searchData = products.filter((item) => item.name.includes(searchValue))
    if(searchData.length > 0){
      this.data = searchData
    } else {
      this.data = []
      this.mess = 'khong tim thay san pham nao'
    }
  }
  
}
