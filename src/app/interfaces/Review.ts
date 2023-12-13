import { ReviewItem } from "./ReviewItem";

export interface Review {
  averageRating: number;
  reviews: ReviewItem[];
}