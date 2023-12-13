import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { ResourceState, LoadState } from '../../interfaces/ResourceState';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';
import { Store } from '@ngrx/store';
import { addProducts } from '../../store/product.actions';

@Component({
  selector: 'page-home',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  products: ResourceState<Product[]> = {object: [], state: LoadState.NOT_LOADED};
  featuredProducts: ResourceState<Product[]> = {object: [], state: LoadState.NOT_LOADED};
  favoriteProducts: ResourceState<Product[]> = {object: [], state: LoadState.NOT_LOADED};

  constructor(private productService: ProductsService, private store: Store<{ product: Product[] }>) {
  }

  async ngOnInit(): Promise<void> {
    this.store.select('product').subscribe((products: Product[]) => {
      this.products = {object: products, state: LoadState.LOADED};
    });

    if (!this.products.object || this.products.object.length === 0) {
      this.products = {object: [], state: LoadState.LOADING};
      const products = await this.productService.getProducts();
      this.store.dispatch(addProducts(products));
    }

    // get random products for featured products with a max of 3 products
    this.featuredProducts = {object: this.products.object
        .slice(0)
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
        .slice(0, 3),
      state: LoadState.LOADED};

    // get top 3 products with highest rating
    this.favoriteProducts  = {object: this.products.object
        .slice(0)
        .sort((a, b) => b.review.averageRating - a.review.averageRating)
        .slice(0, 3),
      state: LoadState.LOADED};   
  }

}
