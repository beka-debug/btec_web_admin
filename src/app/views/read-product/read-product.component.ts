import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { FirebaseClientService } from 'src/app/services/firebase-client.service';

@Component({
  selector: 'app-read-product',
  templateUrl: './read-product.component.html',
  styleUrls: ['./read-product.component.css']
})
export class ReadProductComponent implements OnInit {
  allProducts:Product[] = []
  constructor(private firebase:FirebaseClientService) { }

  ngOnInit(): void {
    this.firebase.readAllProducts().subscribe((response:any)=>{
      response.forEach((element:any) => {
        var product = element.payload.doc.data() as Product;
        product.key = element.payload.doc.id;
        this.allProducts.push(product)
      });
      console.log(this.allProducts)
    })
  }

}
