import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { CartProductComponent } from '../../components/cart-product/cart-product.component';
import { CartProduct } from '../../interfaces/CartProduct';
import { User } from '../../interfaces/User';
import { clearCart, setAddress, setCountry, setEmail, setName, setPhone, setPlace, setZip } from '../../store/user.actions';
import { PriceMustHaveDecimalsPipe } from '../../pipes/price-must-have-decimals.pipe';
import { CalculateBtwPipe } from '../../pipes/calculate-btw.pipe';
import { CalculateShippingPipe } from '../../pipes/calculate-shipping.pipe';

@Component({
  selector: 'page-cart',
  standalone: true,
  imports: [ReactiveFormsModule, CartProductComponent, PriceMustHaveDecimalsPipe, CalculateBtwPipe, CalculateShippingPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  products: CartProduct[] = [];
  totalPrice: number = 0;
  totalAmountOfProducts: number = 0;
  displayForm:boolean = false;
  formValid:boolean = false;
  name = new FormControl('');
  email = new FormControl('');
  address = new FormControl('');
  place = new FormControl('');
  zip = new FormControl('');
  country = new FormControl('');
  phone = new FormControl('');
  formError:String = "";

  constructor(private store: Store<{ user: User; }>) {
    this.store.select('user').subscribe((user: User) => {
      this.products = user.cart;
      let total = 0;
      let totalAmountOfProducts = 0;
      this.products.forEach((p) => {
        total += p.price * p.quantity;
        totalAmountOfProducts += p.quantity;
      });
      this.totalPrice = total;
      this.totalAmountOfProducts = totalAmountOfProducts;
    });
  }

  clearCart() {
    this.store.dispatch(clearCart());
    alert('Cleared cart!');
  }

  pay() {
    this.displayForm = true;  }

  submitForm() {
    this.displayForm = false;
    alert('Thank you for your order!');
    this.store.dispatch(clearCart());
    this.store.dispatch(setName(this.name.value ? this.name.value : ''));
    this.store.dispatch(setEmail(this.email.value ? this.email.value : ''));
    this.store.dispatch(setAddress(this.address.value ? this.address.value : ''));
    this.store.dispatch(setPlace(this.place.value ? this.place.value : ''));
    this.store.dispatch(setZip(this.zip.value ? this.zip.value : ''));
    this.store.dispatch(setCountry(this.country.value ? this.country.value : ''));
    this.store.dispatch(setPhone(this.phone.value ? this.phone.value : ''));

  }

  formChanged() {
    // check if all fields are filled in and are correct
    if (!(this.name.value && this.email.value && this.address.value && this.place.value && this.zip.value && this.country.value && this.phone.value)) {
      this.formError = "Please fill in all fields";
      this.formValid = false;
      return;
    }
    // if email is valid ^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$
    if (this.email.value && !this.email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      this.formError = "Email is not valid";
      this.formValid = false;
      return;
    }
    if (this.phone.value && !this.phone.value.replaceAll(' ', '').match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)) {
      this.formError = "Phone number is not valid";
      this.formValid = false;
      return;
    }
    this.formError = "";	
    this.formValid = true;


  }
}
