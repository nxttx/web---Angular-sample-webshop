import { Review } from "./Review";

export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  review: Review;
}