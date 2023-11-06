import { ProductDto } from './models/product.model';
import { IProduct, Product } from './models/product.schema';

export class ProductService {
  static async getAll(): Promise<ProductDto[]> {
    try {
      const products: IProduct[] | void = await Product.find();
      return (products || []).map((product: IProduct) => ({
        code: product.code,
        name: product.name,
        description: product.description,
        stock: product.stock,
        price: product.price,
        url: product.url
      }));
    } catch (error) {
      return error;
    }
  }

  static async create(product: ProductDto): Promise<ProductDto> {
    try {
      const newProduct: IProduct | void = await Product.create(product);
      if (newProduct) {
        return {
          code: newProduct?.code,
          name: newProduct?.name,
          description: newProduct?.description,
          stock: newProduct?.stock,
          price: newProduct?.price,
          url: newProduct?.url
        };
      }
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
      return error;
    }
    return null;
  }

  static async delete(code: string): Promise<boolean> {
    try {
      const deletedProduct: IProduct | void = await Product.findOneAndDelete({
        code: code
    });
      return !!deletedProduct;
    } catch (error) {
      return error;
    }
  }

  static async update(code: string, product: ProductDto): Promise<ProductDto> {
    try {
      const updateProduct: IProduct | void = await Product.findOneAndUpdate(
        { code: code },
        product
      );
      if (updateProduct) {
        return {
          code: updateProduct?.code,
          name: updateProduct?.name,
          description: updateProduct?.description,
          stock: updateProduct?.stock,
          price: updateProduct?.price,
          url: updateProduct?.url
        };
      }
    } catch (error) {
      return error;
    }
    return null;
  }
}
