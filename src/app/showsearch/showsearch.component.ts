import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-showsearch',
  templateUrl: './showsearch.component.html',
  styleUrls: ['./showsearch.component.css']
})
export class ShowsearchComponent implements OnInit {

  searchedData: Product[];

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.searchedData = this.service.getSearchedData();
  }

}
