import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.component.html',
  styleUrls: ['./searchproduct.component.css']
})
export class SearchproductComponent implements OnInit {

  products: Product[];
  product: Product[];
  searchedItems: Product[];

  constructor(private service: ProductService) { }

  ngOnInit() {
   
  }

  filterData(value:string)
  {
    this.products = this.service.getAllProducts();
    
    this.searchedItems = this.products.filter(
      products =>products.name.toLowerCase().indexOf(value.toLowerCase()) !==-1);

      this.service.setSearchedData(this.searchedItems);
    
      if(this.searchedItems.length > 0)
        alert('Data found, to view use showsearched menu');
      else
        alert('Not found please try with other name');
  }

}
