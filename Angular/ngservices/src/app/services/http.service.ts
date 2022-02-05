import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  //GET API Call
  getAllProducts() {
    return this.http.get('https://fakestoreapi.com/products');
  }

  //POST API Call
  addProduct(productData: any) {
    return this.http.post('https://fakestoreapi.com/products', productData);
  }

  //PUT API Call
  updateProduct(productData: any) {
    return this.http.put('https://fakestoreapi.com/products/7', productData);
  }

  //DELETE API Call
  deleteProduct() {
    return this.http.delete('https://fakestoreapi.com/products/6');
  }
}
