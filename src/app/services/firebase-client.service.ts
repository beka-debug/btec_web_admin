import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseClientService {

  constructor(private firebaseclient:AngularFirestore) { }
  createProduct(product:Product):any{
    return this.firebaseclient
    .collection(environment.firebaseCollections.product)
    .add(product);
  }
  readAllProducts():any{
    return this.firebaseclient
    .collection(environment.firebaseCollections.product)
    .snapshotChanges();
  }

 getProducts(key:string):any{
    return this.firebaseclient
    .collection(environment.firebaseCollections.product)
    .doc(key)
    .valueChanges();
  }

 
  deleteProduct(key:string):any{
    return this.firebaseclient
    .collection(environment.firebaseCollections.product)
    .doc(key).delete()
  }

  updateProduct(product:Product):any{
        return this.firebaseclient
        .collection(environment.firebaseCollections.product)
        .doc(product.key)
        .update(product)
  }
}
