import { Product } from "./product"

export interface PageProduct {
    totalItems: number,
    totalPages: number,
    currentPage: number,
    products: Product[]
}
