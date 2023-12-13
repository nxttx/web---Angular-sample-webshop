import { createAction } from '@ngrx/store';
import { Product } from '../interfaces/product';

export const setName = createAction('[User] Set Name', (name: string) => ({ name }));
export const setEmail = createAction('[User] Set Email', (email: string) => ({ email }));
export const setAddress = createAction('[User] Set Address', (address: string) => ({ address }));
export const setPlace = createAction('[User] Set Place', (place: string) => ({ place }));
export const setZip = createAction('[User] Set Zip', (zip: string) => ({ zip }));
export const setCountry = createAction('[User] Set Country', (country: string) => ({ country }));
export const setPhone = createAction('[User] Set Phone', (phone: string) => ({ phone }));
export const addProductToCart = createAction('[User] Add Product To Cart', (product: Product) => ({ product }));
export const removeProductFromCart = createAction('[User] Remove Product From Cart', (product: Product) => ({ product }));
export const clearUser = createAction('[User] Clear User');
export const clearCart = createAction('[User] Clear Cart');
