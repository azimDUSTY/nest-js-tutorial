import { CategoryEntity } from "../../categories/entities/category.entity";
import { AuthorEntity } from "../../authors/entities/author.entity";
 
export class QuoteEntity {
  id: number;
  text: string;
}
 
export class QuoteWithAuthorEntity {
  id: number;
  text: string;
 
  author: AuthorEntity;
}
 
export class QuoteWithAuthorAndCategoryEntity {
  id: number;
  text: string;
 
  author: AuthorEntity;
  category: CategoryEntity;
}