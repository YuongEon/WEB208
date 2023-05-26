import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { products } from 'src/app/data/product';
import { Product } from 'src/app/interface/product';
import { __values } from 'tslib';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
   constructor(private route : ActivatedRoute) {}
   data: Product[] = products
   itemData: Product | null = null

   ngOnInit(): void {
    
    const prodId = this.route.snapshot.paramMap.get('id');
    const itemActive = this.data.filter((item) => item.id == prodId)
    this.itemData = itemActive[0];
   }
} 
