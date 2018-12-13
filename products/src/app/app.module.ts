import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ReviewComponent } from './review/review.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { ReviewdetailComponent } from './reviewdetail/reviewdetail.component';
import { AuthorComponent } from './author/author.component';
import { AllreviewsComponent } from './allreviews/allreviews.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { ProductsService } from './products.service'

@NgModule({
  declarations: [
    AppComponent,
    
    ProductComponent,
    ReviewComponent,
    ProductdetailComponent,
    BrandComponent,
    CategoryComponent,
    ReviewdetailComponent,
    AuthorComponent,
    AllreviewsComponent,
    PagenotfoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
