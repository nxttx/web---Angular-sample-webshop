import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';
import { FirstCharCapitalPipe } from '../../pipes/first-char-capital.pipe';
import { PriceMustHaveDecimalsPipe } from '../../pipes/price-must-have-decimals.pipe';
import { LoadState, ResourceState } from '../../interfaces/ResourceState';
import { Store } from '@ngrx/store';
import { addProductToCart } from '../../store/user.actions';
import { CalculateBtwPipe } from '../../pipes/calculate-btw.pipe';

@Component({
  selector: 'page-product-details',
  standalone: true,
  imports: [FirstCharCapitalPipe, PriceMustHaveDecimalsPipe, CalculateBtwPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  id: number;
  product: ResourceState<Product>;
  sub: Subscription | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductsService, private store: Store<{ product: Product[]; }>) {
    this.id = -1;
    this.product = {
      object: {
        id: -1,
        title: "",
        description: "",
        image: "",
        price: 0
      } as Product, state: LoadState.NOT_LOADED
    };
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(async (params) => {
      if (isNaN(params['id']) || params['id'] < 0) {
        // redirect to not found page
        this.router.navigate(['/not-found']);
      }
      this.id = +params['id'];

      this.product = { object: this.product.object, state: LoadState.LOADING };
      const product = await this.productService.getProduct(this.id);
      this.product = { object: product, state: LoadState.LOADED };

      // if product is empty, redirect to not found page
      if (!this.product.object) {
        this.router.navigate(['/not-found']);
      }

    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  addToCart() {
    this.store.dispatch(addProductToCart( this.product.object ));
    alert('Added to cart!');
  }

  generateStars(rating: number) {
    return Array(Math.floor(rating)).fill(0);
  }
}
