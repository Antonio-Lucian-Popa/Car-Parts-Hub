import { CarBrand } from './car-brand';
import { CarCategory } from './car-category';
export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    brand: CarBrand;
    category: CarCategory;
    images: string[];
    quantity: number;
    createdAt: string;
}
