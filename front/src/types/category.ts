import { IProduct } from "./productTypes";


export interface ICategory {
  id: number; // Unique identifier for the category
  documentId: string; // Unique document ID
  title: string; // Title of the category
  slug: string; // Slug (unique identifier) of the category
  createdAt: string; // Timestamp when the category was created
  updatedAt: string; // Timestamp when the category was last updated
  publishedAt: string; // Timestamp when the category was published
  products: IProduct[]; // List of related products (can be empty)
//   page: Page;
//   recommendations: Recommendation[] | null; 
}

export interface ICategoryProps {
  categories: ICategory[];
}

