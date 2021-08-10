import { environment } from 'src/environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreateProductComponent } from './views/create-product/create-product.component';
import { ReadProductComponent } from './views/read-product/read-product.component';
import { UpdateProductComponent } from './views/update-product/update-product.component';
import { SliderComponent } from './views/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateProductComponent,
    ReadProductComponent,
    UpdateProductComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfiguration),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
