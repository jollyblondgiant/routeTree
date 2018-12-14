import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  newProduct : any
  errors: any
  errorMessage: string[]
  constructor(private _productService: ProductsService){}
  
  ngOnInit() {
    this.errorMessage = []
    this.newProduct = {
      name: null,
      price : null,
      img: null
    }
  }
  addProduct(){
    console.log(this.newProduct)
    console.log(this.newProduct.name)
    this._productService.addProduct(this.newProduct).subscribe(data =>{
      if('errors' in data){
        this.errors = data['errors']
        for(var key in this.errors){
          this.errorMessage.push(this.errors[key].message)
          
        }
        
      }
      })
    console.log("SUCCESS!")
    this.newProduct = {
      name: null,
      price : null,
      img: null
    }
  }
}
