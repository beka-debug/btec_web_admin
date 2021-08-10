import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { FirebaseClientService } from 'src/app/services/firebase-client.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
  providers:[FirebaseClientService]
})
export class CreateProductComponent implements OnInit {

  constructor(private firebase:FirebaseClientService) { }

  ngOnInit(): void {
  }
  createProduct(form:NgForm){
    this.firebase.createProduct(form.value as Product).then((respnse:any)=>{
      console.log(respnse)
    },(error:any) =>{
       console.log(error)
    })
  }
}
