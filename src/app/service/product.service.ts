import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url :string = '../assets/product.json';
  products: Product[];
  status:string;
  filteredData: Product[];

  constructor(private http:HttpClient) { 
    this.getProducts();
  }

  getdata(): Observable<Product[]>
  {
      return this.http.get<Product[]>(this.url);
  }

  getProducts()
  {
     this.getdata().subscribe((data:Product[])=>{
     this.products=data;
     console.log('Data are'+this.products);
     });
  }

  getAllProducts()
  {
    return this.products;
  }

  deleteProduct(index:number)
  {
    this.products.splice(index, 1);
  }

  addProduct(product: Product)
  {
    this.products.push(product);
  }

  setSearchedData(data)
  {
    this.filteredData=data;
  }

  getSearchedData()
  {
    return this.filteredData;
  }
}
