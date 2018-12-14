import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  theseParams : any
  thisProduct: any
  parentParams: any
  editProduct : any
  errors: any
  errorMessage: string[]
  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductsService,
    ) { }

  ngOnInit() {
    this.errorMessage = []
    this._route.params.subscribe(params=>this.theseParams = params)
    console.log(this.theseParams)
    this._productService.getProductbyID(this.theseParams.id).subscribe(data=>this.editProduct = data)
    this.editProduct = {
      name: '',
      img: '',
      price: ''
    }
  }
  updateProduct(id){
    this._productService.editProduct(id, this.editProduct).subscribe(data => {
      if('errors' in data){
        this.errors = data['errors']
        for(var key in this.errors){
          this.errorMessage.push(this.errors[key].message)
          
        }
        
      }
      })
    this.editProduct = {
      name: '',
      img: '',
      price: ''
    }
      
    }
  }
