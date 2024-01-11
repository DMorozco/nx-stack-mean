import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from "rxjs";
import { UserDto } from "./user.service";

export interface CustomerDto {
  name: string;
  lastname: string;
  address: string;
  city: string;
  phone: number;
  email: string;
}

export interface ToppingDTO {
  code: number;
  name: string;
  price: number;
}

export interface OrderItemDto {
  code: number;
  img: string;
  name: string;
  quantity: number;
  price: number;
  flavours: string[];
  size: number;
  toppings?: ToppingDTO[];
}

export interface OrderDto {
  orderId?: string;
  customer: UserDto;
  products: OrderItemDto[];
  createDate?: Date;
  total: number;
  status?: 'created' | 'delivered' | 'cancelled';
}

export interface OrderResponse {
    status: number;
    data: OrderDto;
    error?: {
        message:string;
    };
}

@Injectable({ providedIn: 'root' })
export class OrderService {
    private readonly baseUrl: string = 'http://localhost:3007/api/orders';
 
    constructor(private http: HttpClient) {}

      public async createorder(order: OrderDto): Promise<OrderResponse> {
        return await firstValueFrom(this.http.post<OrderResponse>(`${this.baseUrl}`, order))
          .then((result) => {
            console.log(JSON.stringify(result, null, 2))
            return result;
          })
          .catch((error) => {
            console.log(JSON.stringify(error, null, 2))
            return error;
          });;
      }
    }

      