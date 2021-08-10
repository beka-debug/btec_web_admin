import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './views/create-product/create-product.component';
import { ReadProductComponent } from './views/read-product/read-product.component';
import { SliderComponent } from './views/slider/slider.component';

const routes: Routes = [
  {path:'',component:ReadProductComponent},
  {path:'createproduct',component:CreateProductComponent},
  {path:'updateproduct/:key',component:CreateProductComponent},
  {path:'slider',component:SliderComponent},
  {path:'whyus',component:SliderComponent},
  {path:'custom',component:SliderComponent},
  {path:'contact',component:SliderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
