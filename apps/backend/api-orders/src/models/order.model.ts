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
  customer: CustomerDto;
  products: OrderItemDto[];
  createDate?: Date;
  total: number;
  status?: 'created' | 'delivered' | 'cancelled';
}
