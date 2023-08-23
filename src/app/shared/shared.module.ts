import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryFilterComponent } from 'src/app/core/shop/category-filter/category-filter.component';
import { ProductListComponent } from 'src/app/core/shop/product-list/product-list.component';


const NB_MODULES: any[] = [
];

const COMPONENTS: any[] = [
  CategoryFilterComponent,
  ProductListComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    ...NB_MODULES
  ],
  exports: [...COMPONENTS, ...NB_MODULES],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
