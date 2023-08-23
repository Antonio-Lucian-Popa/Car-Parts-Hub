import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewProductRoutingModule } from './view-product-routing.module';
import { ViewProductComponent } from './view-product.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ViewProductComponent
  ],
  imports: [
    CommonModule,
    ViewProductRoutingModule,
    SharedModule
  ]
})
export class ViewProductModule { }
