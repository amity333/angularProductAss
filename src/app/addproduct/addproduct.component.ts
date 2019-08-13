import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  prod: Product={id: 0, name: '', price: 0, brand: ''};
  constructor(private service: ProductService , private router: Router) { }

  ngOnInit() {
  }

  add()
  {
    this.service.addProduct(this.prod);
     alert("Product aaded successfully");                     
     this.router.navigate(['list']);
    
  }

}
