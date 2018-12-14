import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any
  constructor(private _productService: ProductsService) { }

  ngOnInit() {
    this.showProducts()
  }
  showProducts(){
    this._productService.getProducts().subscribe(data=>this.products = data)
  }
  destroyProduct(product){
    this._productService.destroyProduct(product._id).subscribe(data=>console.log("BALEETED"))
    this.showProducts()
  }
}
