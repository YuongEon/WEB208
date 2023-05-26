import { Component, Input } from '@angular/core';
import { products } from 'src/app/data/product';
import { Product } from 'src/app/interface/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  data: Product[] = products
}
