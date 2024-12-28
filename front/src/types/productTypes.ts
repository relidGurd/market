import { ICategory } from "./category";
import { IImage } from "./image";
import { ItabItem } from "./tabItem";

export interface IProduct {
  id: number,
  documentId: string,
  title: string; // The product's title
  createdAt: string,
  updatedAt: string,
  publishedAt: null,
  slug: string; // Unique identifier for the product
  article: string; // Additional article information
  price: number; // Product price
  description: string; // Product description
  salePercent:  null | number; // Discount percentage
  category: null | ICategory; // Relation with Category type
  image: null | IImage; // Media type for product image
  icon: IImage; // Media type for an icon
  tab: ItabItem[];
}

