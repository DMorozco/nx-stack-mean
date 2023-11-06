export interface CustomerDto {
    name: string,
    phone: string,
    address: string,
}

export interface IngredientDTO {
    code: string;
    name: string;
    price: number;
}

export interface PizzaDto {
    code: string;
    name: string;
    ingredients: IngredientDTO[];
    quantity: number;
    price: number;
    subtotal: number;
}

export interface OrderDto {
    orderId?: string,
    customer: CustomerDto,
    products: PizzaDto[],
    createDate?: Date,
    total: number,
    status?: 'created' | 'delivered' | 'cancelled'
}