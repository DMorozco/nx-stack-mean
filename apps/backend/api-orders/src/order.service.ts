import { OrderDto } from './models/order.model';
import { IOrder, Order } from './models/order.schema';
import { v4 as uuidv4 } from 'uuid';

export class OrderService {
  static async getAll(): Promise<OrderDto[]> {
    try {
      const orders: IOrder[] | void = await Order.find();
      return (orders || []).map((order: IOrder) => ({
        orderId: order.orderId,
        createDate: order.createDate,
        customer: order.customer,
        products: order.products,
        total: order.total,
        status: order.status,
      }));
    } catch (error) {
      return error;
    }
  }

  static async create(order: OrderDto): Promise<OrderDto> {
    try {
      order.orderId = uuidv4();
      order.createDate = new Date();
      order.status = 'created';

      const newOrder: IOrder | void = await Order.create(order);
      if (newOrder) {
        return {
          orderId: order.orderId,
          createDate: order.createDate,
          customer: order.customer,
          products: order.products,
          total: order.total,
          status: order.status,
        };
      }
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
      return error;
    }
    return null;
  }

  static async deliver(orderId: string): Promise<OrderDto> {
    try {
      const updateOrder: IOrder | void = await Order.findOneAndUpdate(
        { orderId: orderId },
        {
          status: 'delivered',
        }
      );
      if (updateOrder) {
        return {
          orderId: updateOrder.orderId,
          createDate: updateOrder.createDate,
          customer: updateOrder.customer,
          products: updateOrder.products,
          total: updateOrder.total,
          status: updateOrder.status,
        };
      }
      throw 'order doesnt exist'
    } catch (error) {
      return error;
    }
  }

  static async cancel(orderId: string): Promise<OrderDto> {
    try {
      const updateOrder: IOrder | void = await Order.findOneAndUpdate(
        { orderId: orderId },
        {
          status: 'cancelled',
        }
      );
      if (updateOrder) {
        return {
          orderId: updateOrder.orderId,
          createDate: updateOrder.createDate,
          customer: updateOrder.customer,
          products: updateOrder.products,
          total: updateOrder.total,
          status: updateOrder.status,
        };
      }
      throw 'order doesnt exist'
    } catch (error) {
      return error;
    }
  }

  static async delete(orderId: string): Promise<OrderDto> {
    try {
      const updateOrder: IOrder | void = await Order.findOneAndUpdate(
        { orderId: orderId },
        {
          status: 'deleted',
        }
      );
      if (updateOrder) {
        return {
          orderId: updateOrder.orderId,
          createDate: updateOrder.createDate,
          customer: updateOrder.customer,
          products: updateOrder.products,
          total: updateOrder.total,
          status: updateOrder.status,
        };
      }
      throw 'order doesnt exist'
    } catch (error) {
      return error;
    }
  }

  static async update(orderId: string, order: OrderDto): Promise<OrderDto> {
    try {
      const updateOrder: IOrder | void = await Order.findOneAndUpdate(
        { orderId: orderId },
        order
      );
      if (updateOrder) {
        return {
          orderId: updateOrder?.orderId,
          createDate: updateOrder.createDate,
          customer: updateOrder.customer,
          products: updateOrder.products,
          total: updateOrder.total,
          status: updateOrder.status,
        };
      }
      throw 'order doesnt exist'
    } catch (error) {
      return error;
    }
  }
}
