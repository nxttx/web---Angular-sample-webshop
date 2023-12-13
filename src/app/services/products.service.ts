import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { Review } from '../interfaces/Review';
import { ReviewItem } from '../interfaces/ReviewItem';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  public async getProducts(): Promise<Product[]> {
    const response = await fetch("/assets/products");
    const products = await response.json();
    products.products.map((item: Product) => {
      item.id = Number(item.id);
      item.title = String(item.title);
      item.description = String(item.description);
      item.image = String(item.image);
      item.price = Number(item.price);
      item.review = {
        averageRating: Number(item.review.averageRating),
        reviews: item.review.reviews.map((review: ReviewItem) => {
          review.id = Number(review.id);
          review.name = String(review.name);
          review.comment = String(review.comment);
          review.rating = Number(review.rating);
          return review;
        })
      } as Review;
    });
    return products.products;
  }

  public async getProduct(id: number): Promise<Product> {
    const response = await fetch(`/assets/products`);
    const product = await response.json();
    product.products.map((item: Product) => {
      item.id = Number(item.id);
      item.title = String(item.title);
      item.description = String(item.description);
      item.image = String(item.image);
      item.price = Number(item.price);
      item.review = {
        averageRating: Number(item.review.averageRating),
        reviews: item.review.reviews.map((review: ReviewItem) => {
          review.id = Number(review.id);
          review.name = String(review.name);
          review.comment = String(review.comment);
          review.rating = Number(review.rating);
          return review;
        })
      } as Review;
    });
    return product.products.find((item: Product) => item.id === id);
  }
}
