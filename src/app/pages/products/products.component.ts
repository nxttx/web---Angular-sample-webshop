import { Component} from '@angular/core';
import {Store } from '@ngrx/store';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';
import { addProducts } from '../../store/product.actions';
import { LoadState, ResourceState } from '../../interfaces/ResourceState';



@Component({
  selector: 'page-products',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products: ResourceState<Product[]> = {object: [], state: LoadState.NOT_LOADED};

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
  }

}

