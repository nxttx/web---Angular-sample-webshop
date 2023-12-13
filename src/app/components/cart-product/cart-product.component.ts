import { Component, Input } from '@angular/core';
import { MaxStringLengthPipe } from '../../pipes/max-string-length.pipe';
import { FirstCharCapitalPipe } from '../../pipes/first-char-capital.pipe';
import { PriceMustHaveDecimalsPipe } from '../../pipes/price-must-have-decimals.pipe';
import { User } from '../../interfaces/User';
import { Store } from '@ngrx/store';
import { addProductToCart, removeProductFromCart } from '../../store/user.actions';
import { Product } from '../../interfaces/product';
import { CalculateBtwPipe } from '../../pipes/calculate-btw.pipe';

@Component({
  selector: 'app-cart-product',
  standalone: true,
  imports: [MaxStringLengthPipe, FirstCharCapitalPipe, PriceMustHaveDecimalsPipe, CalculateBtwPipe],
  templateUrl: './cart-product.component.html',
  styleUrl: './cart-product.component.scss'
})
export class CartProductComponent {
  @Input() id: number = 0;
  @Input() image: string = 'https://via.placeholder.com/300';
  @Input() title: string = 'EMPTY';
  @Input() description: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.';
  @Input() price: number = 0;
  @Input() quantity: number = 0;

  constructor(private store: Store<{ User:User; }>) {
  }

  addToCart() {
    this.store.dispatch(addProductToCart( { id: this.id, image: this.image, title: this.title, description: this.description, price: this.price } as Product));
    alert('Added to cart!');
  }

  removeFromCart() {
    this.store.dispatch(removeProductFromCart( { id: this.id, image: this.image, title: this.title, description: this.description, price: this.price } as Product));
    alert('Removed from cart!');
  }
}
