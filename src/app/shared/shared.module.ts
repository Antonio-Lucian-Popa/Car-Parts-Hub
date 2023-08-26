import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryFilterComponent } from 'src/app/core/shop/category-filter/category-filter.component';
import { ProductListComponent } from 'src/app/core/shop/product-list/product-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { RouterModule } from '@angular/router';


const NB_MODULES: any[] = [
  ReactiveFormsModule,
  RouterModule
];

const COMPONENTS: any[] = [
  CategoryFilterComponent,
  ProductListComponent,
  LoaderComponent
];

@NgModule({
  declarations: [...COMPONENTS, LoaderComponent],
  imports: [
    CommonModule,
    ...NB_MODULES
  ],
  exports: [...COMPONENTS, ...NB_MODULES],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
