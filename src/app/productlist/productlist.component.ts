import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  products :Product[];
  constructor(private service:ProductService) { }

  ngOnInit() {
    this.products=this.service.getAllProducts();
  }

  delete(i: number)
  {
    if (confirm('Are u sure you want to delete ?'))
    {
      this.service.deleteProduct(i);
    }
  }

}
