import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CreateProductComponent } from './views/create-product/create-product.component';
import { ReadProductComponent } from './views/read-product/read-product.component';
import { SliderComponent } from './views/slider/slider.component';
import { UpdateProductComponent } from './views/update-product/update-product.component';

const routes: Routes = [
  {path:'',component:ReadProductComponent},
  {path:'createproduct',component:CreateProductComponent},
  {path:'updateproduct/:key',component:UpdateProductComponent},
  {path:'slider',component:SliderComponent},
  {path:'whyus',component:SliderComponent},
  {path:'custom',component:SliderComponent},
  {path:'contact',component:SliderComponent},
  {path:'side',component:SidebarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
