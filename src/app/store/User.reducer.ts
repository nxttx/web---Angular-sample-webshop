import { createReducer, on } from "@ngrx/store";
import { setName, setEmail, setAddress, setPlace, setZip, setCountry, setPhone, addProductToCart, removeProductFromCart, clearUser, clearCart } from "./user.actions";
import { User } from "../interfaces/User";

export const initialState : User = {
  name: "",
  email: "",
  address: "",
  place: "",
  zip: "",
  country: "",
  phone: "",
  cart: []
} 

export const userReducer = createReducer(
  initialState,
  on(setName, (state, { name }) => ({ ...state, name })),
  on(setEmail, (state, { email }) => ({ ...state, email })),
  on(setAddress, (state, { address }) => ({ ...state, address })),
  on(setPlace, (state, { place }) => ({ ...state, place })),
  on(setZip, (state, { zip }) => ({ ...state, zip })),
  on(setCountry, (state, { country }) => ({ ...state, country })),
  on(setPhone, (state, { phone }) => ({ ...state, phone })),
  on(addProductToCart, (state, { product }) => {
    let cart = structuredClone(state.cart);
    let productInCartIndex = cart.findIndex((p: { id: number; }) => p.id === product.id);
    if (productInCartIndex !== -1) {
      cart[productInCartIndex].quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    return { ...state, cart };
  }),
  on(removeProductFromCart, (state, { product }) => {
    let cart = structuredClone(state.cart);
    let productInCartIndex = cart.findIndex((p: { id: number; }) => p.id === product.id);
    if (productInCartIndex !== -1) {
      cart[productInCartIndex].quantity--;
      if (cart[productInCartIndex].quantity === 0) {
        cart.splice(productInCartIndex, 1);
      }
    }
    return { ...state, cart };
  }),
  on(clearUser, (state) => ({ ...initialState })),
  on(clearCart, (state) => ({ ...state, cart: [] }))

);