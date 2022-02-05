import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: any;

  constructor(private httpService: HttpService) {
    this.httpService.getAllProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }

  ngOnInit(): void {
    //add product
    let productData = {
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
    };

    this.httpService.addProduct(productData).subscribe((data) => {
      console.log(data);
    });

    //update product
    let updateProductData = {
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
    };

    this.httpService.updateProduct(updateProductData).subscribe((data) => {
      console.log(data);
    });

    //Delete Product
    this.httpService.deleteProduct().subscribe((data) => {
      console.log(data);
    });
  }
}
