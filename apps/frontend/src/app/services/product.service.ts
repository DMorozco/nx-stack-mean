import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ProductDto {
  code: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  url: string;
}

export interface ProductDeletedResponse {
  isDeleted: boolean;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly baseUrl: string = 'http://localhost:3004/api/products';

  constructor(private http: HttpClient) {}

  create(product: ProductDto): Observable<ProductDto> {
    return this.http.post<ProductDto>(`${this.baseUrl}`, product);
  }

  update(product: ProductDto): Observable<ProductDto> {
    return this.http.put<ProductDto>(`${this.baseUrl}/${product.code}`, product);
  }

  getAll(): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.baseUrl}`);
  }

  delete(code: string): Observable<ProductDeletedResponse> {
    return this.http.delete<ProductDeletedResponse>(`${this.baseUrl}/${code}`);
  }
}
