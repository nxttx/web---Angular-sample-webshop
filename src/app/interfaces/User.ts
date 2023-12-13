import { CartProduct } from './CartProduct';

export interface User {
  name: string;
  email: string;
  address: string;
  place: string;	
  zip: string;
  country: string;
  phone: string;
  cart: CartProduct[];
}
