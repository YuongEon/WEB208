import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/app/data/product';
import { Product } from 'src/app/interface/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  constructor(private router: ActivatedRoute){}
  
  id: string = this.router.snapshot.params["id"]
  data: Product = products.filter((item) => item.id == this.id)[0];
}
