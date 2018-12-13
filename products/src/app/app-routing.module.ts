import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllreviewsComponent } from './allreviews/allreviews.component'
import { AuthorComponent } from './author/author.component'
import { BrandComponent } from './brand/brand.component'
import { CategoryComponent } from './category/category.component'
import { ProductComponent } from './product/product.component'
import { ProductdetailComponent } from './productdetail/productdetail.component'
import { ReviewComponent } from './review/review.component'
import { ReviewdetailComponent } from './reviewdetail/reviewdetail.component'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'

const routes: Routes = [
  { path: 'products', component: ProductComponent, children:[
      {path: 'details/:id', component: ProductdetailComponent },
      {path: 'brand/:id', component: BrandComponent },
      {path: 'category/:cat', component: CategoryComponent },
    ] },
  { path: 'reviews', component: ReviewComponent, children: [
    { path: 'details/:id', component: ReviewdetailComponent },
    { path: 'author/:id', component: AuthorComponent },
    { path: 'all/:id', component: AllreviewsComponent },
  ] },

  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
