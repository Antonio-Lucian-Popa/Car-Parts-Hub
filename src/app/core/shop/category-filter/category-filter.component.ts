import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/shared/interfaces/brand';
import { Category } from 'src/app/shared/interfaces/category';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss']
})
export class CategoryFilterComponent implements OnInit{

  categories: Category[] = [];

  brands: Brand[] = [];

  isDropdownVisible: boolean = false;


  ngOnInit(): void {
    const resultBrand: Brand[] = [
      {
        id: "23",
        name: "Bmw"
      },
      {
        id: "24",
        name: "Audi"
      },
      {
        id: "45",
        name: "Mercedes"
      }
    ];

    const resultCategory: Category[] = [
        {
          id: "1",
          name: "Oil and filters"
        },
        {
          id: "2",
          name: "Brakes"
        },
        {
          id: "3",
          name: "Tires"
        }
    ];


    // sort alphabetically
    resultCategory.sort((a, b) => a.name.localeCompare(b.name));
    resultBrand.sort((a, b) => a.name.localeCompare(b.name));

    // assign the sorted arrays
    this.categories = resultCategory;
    this.brands = resultBrand;
  }
}
