import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { 

  }
  getProducts(){
    return this._http.get('/products')
    
  }

  getProductbyID(id:string){
    return this._http.get(`/products/${id}`)
  }

  postToServer(num){
    return this._http.post(`/products`, num)
  }
  addProduct(newProduct){
    console.log("PRODUCTS_SERVICE_TS")
    return this._http.post('/products', newProduct)
  }
  destroyProduct(product){
    return this._http.delete(`/products/${product}`)
  }
  editProduct(product, updateProduct){
    return this._http.put(`/products/${product}`, updateProduct)
  }
}
