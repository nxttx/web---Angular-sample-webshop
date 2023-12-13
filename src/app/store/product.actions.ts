import { createAction } from '@ngrx/store';
import { Product } from '../interfaces/product';

export const addProduct = createAction('[Product] Add Product', (product: Product) => ({ product }));
export const addProducts = createAction('[Product] Add Products' , (products: Product[]) => ({ products }));
export const clearProducts = createAction('[Product] Clear Products');