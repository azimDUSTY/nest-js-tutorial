import { QuoteWithAuthorEntity } from "../../quotes/entities/quote.entity";
 
export class CategoryEntity {
  id: number;
  name: string;
}
 
export class CategoryWithAuthorAndQuotesEntity {
  id: number;
  name: string;
  quotes: QuoteWithAuthorEntity[];
}