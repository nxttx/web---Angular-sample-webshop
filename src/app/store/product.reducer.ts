import { createReducer, on } from '@ngrx/store';
import { addProduct, addProducts, clearProducts } from './product.actions';
import { Product } from '../interfaces/product';

export const initialState:Product[] = [];

export const productReducer = createReducer(
  initialState,
  on(addProduct, (state, { product }) => [...state, product]),
  on(addProducts, (state, { products }) => [...state, ...products]),
  on(clearProducts, _ => [])
  
);

