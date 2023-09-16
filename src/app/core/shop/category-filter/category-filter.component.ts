import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Brand } from 'src/app/shared/interfaces/brand';
import { Category } from 'src/app/shared/interfaces/category';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss']
})
export class CategoryFilterComponent implements OnInit {

  // userForm = this.fb.group({
  //   categoriesSelected: new FormArray([]),
  //   brandsSelected: new FormArray([])
  // });

  // Create a FormGroup to manage the dynamic checkboxes
  userForm!: FormGroup;

  searchForm = this.fb.group({
    search: ['']
  });

  categories: Category[] = [];
  // Is the category that user select
  categoriesSelected: string[] = [];
  brands: Brand[] = [];
  // Is the brand that user select
  brandsSelected: string[] = [];

  isDropdownVisible: boolean = false;

  isLoading = true;

  sortType = '';
  searchValue: string | null = "";


  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
    const resultBrand: Brand[] = [
      {
        id: "23",
        name: "BMW"
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
        name: "OIL"
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

    // Initialize the form controls and their initial values
    this.userForm = this.fb.group({
      // Create a FormArray for the categories checkboxes
      categories: this.buildCheckboxes(this.categories),
      // Create a FormArray for the brands checkboxes
      brands: this.buildCheckboxes(this.brands)
    });

    this.searchForm.valueChanges.subscribe(value => {
      this.searchValue = value.search ? value.search : null;
    });
  }

  totalPages = 0;
  currentPage = 0;

  onRecalculateListProduct($event: any) {
    this.totalPages = $event.totalPages;
    this.currentPage = $event.currentPage;
  }

  // Helper method to create and initialize the FormArray for checkboxes
  buildCheckboxes(items: any[]) {
    const checkboxArray = items.map(() => this.fb.control(false));
    return this.fb.array(checkboxArray);
  }

  onCheckChange(event: any) {
    const selectedCategories: string[] = this.userForm.value.categories
      .map((isChecked: boolean, index: number) => isChecked ? (this.categories[index] as Category).id : null)
      .filter((id: number | null) => id !== null) as string[];

    const selectedBrands: string[] = this.userForm.value.brands
      .map((isChecked: boolean, index: number) => isChecked ? (this.brands[index] as Brand).id : null)
      .filter((id: number | null) => id !== null) as string[];

    if (selectedCategories.length > 0 || selectedBrands.length > 0) {
      this.categoriesSelected = selectedCategories.map(id => {
        const category = this.categories.find(category => id === category.id);
        return category ? category.name.toLocaleUpperCase() : '';
      });
      this.brandsSelected = selectedBrands.map(id => {
        const brand = this.brands.find(brand => id === brand.id);
        return brand ? brand.name.toLocaleUpperCase() : '';
      });

    } else if (selectedCategories.length === 0 || selectedBrands.length === 0) {
      this.categoriesSelected = [];
      this.brandsSelected = [];
    }
  }

  sortItems(sortType: string) {
    this.sortType = sortType;
  }

}
