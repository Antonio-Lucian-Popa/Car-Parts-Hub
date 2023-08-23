import { Component } from '@angular/core';
import { Category } from 'src/app/shared/interfaces/category';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss']
})
export class CategoryFilterComponent {

  categories: Category[] = [
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
}
