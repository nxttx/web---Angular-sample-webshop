import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaxStringLengthPipe } from '../../pipes/max-string-length.pipe';
import { FirstCharCapitalPipe } from '../../pipes/first-char-capital.pipe';
import { PriceMustHaveDecimalsPipe } from '../../pipes/price-must-have-decimals.pipe';
import { Store } from '@ngrx/store';
import { User } from '../../interfaces/User';
import { addProductToCart } from '../../store/user.actions';
import { Product } from '../../interfaces/product';
import { CalculateBtwPipe } from '../../pipes/calculate-btw.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink, MaxStringLengthPipe, FirstCharCapitalPipe, PriceMustHaveDecimalsPipe, CalculateBtwPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() id: number = 0;
  @Input() image: string = '/assets/placeholder300.png';
  @Input() title: string = 'EMPTY';
  @Input() description: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.';
  @Input() price: number = 0;

  constructor(private store: Store<{ User: User[] }>) {
  }

  addToCart() {
    this.store.dispatch(addProductToCart( { id: this.id, image: this.image, title: this.title, description: this.description, price: this.price } as Product ));
    alert('Added to cart!');
  }
}
