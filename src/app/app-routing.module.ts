import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { ShowsearchComponent } from './showsearch/showsearch.component';


const routes: Routes = [
  {path:'',redirectTo:'list',pathMatch:'full'},
  {path:'add',component:AddproductComponent},
  
  {path:'list',component:ProductlistComponent},
  {path:'search',component:SearchproductComponent},
  {path:'showsearch',component:ShowsearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
