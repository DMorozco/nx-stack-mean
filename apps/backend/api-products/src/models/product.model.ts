export interface ProductDto {
  id: number;
  img: string;
  name: string;
  shortdesc: string;
  price: number;
  rating: number;
  category: number[];
  sizes: [];
  sku: string;
  tags: number[];
  attributes: [];
  longdescription: string;
  reviews: [];
}