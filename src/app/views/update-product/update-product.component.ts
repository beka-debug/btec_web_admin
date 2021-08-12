import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { FirebaseClientService } from 'src/app/services/firebase-client.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  @ViewChild('form') form!:NgForm;
  key:string = "";
  constructor(private firebase:FirebaseClientService,
    private activetedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.activetedRoute.params.subscribe((route:any)=>{
      this.key = route['key']
      console.log(this.key);
      this.firebase.getProducts(this.key).subscribe((response:any)=>{
        console.log(response);
        this.form.setValue(response)
      })
    })
  }
 updateProduct(form:NgForm):any{
   var product = form.value as Product
   product.key = this.key
    this.firebase.updateProduct(product).then((response:any)=>{
        this.router.navigate(["/"])
    })
 }
}
