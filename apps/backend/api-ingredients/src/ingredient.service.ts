import { IngredientDto } from './models/ingredient.model';
import { IIngredient, Ingredient } from './models/ingredient.schema';

export class IngredientService {
  static async getAll(): Promise<IngredientDto[]> {
    try {
      const ingredients: IIngredient[] | void = await Ingredient.find();
      return (ingredients || []).map((ingredient: IIngredient) => ({
        code: ingredient.code,
        name: ingredient.name,
        description: ingredient.description,
        stock: ingredient.stock,
        price: ingredient.price,
      }));
    } catch (error) {
      return error;
    }
  }

  static async create(ingredient: IngredientDto): Promise<IngredientDto> {
    try {
      const newIngredient: IIngredient | void = await Ingredient.create(ingredient);
      if (newIngredient) {
        return {
          code: newIngredient?.code,
          name: newIngredient?.name,
          description: newIngredient?.description,
          stock: newIngredient?.stock,
          price: newIngredient?.price,
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
      const deletedIngredient: IIngredient| void = await Ingredient.findOneAndDelete({
        code: code
    });
      return !!deletedIngredient;
    } catch (error) {
      return error;
    }
  }

  static async update(code: string, ingredient: IngredientDto): Promise<IngredientDto> {
    try {
      const updateIngredient: IIngredient | void = await Ingredient.findOneAndUpdate(
        { code: code },
        ingredient
      );
      if (updateIngredient) {
        return {
          code: updateIngredient?.code,
          name: updateIngredient?.name,
          description: updateIngredient?.description,
          stock: updateIngredient?.stock,
          price: updateIngredient?.price,
        };
      }
    } catch (error) {
      return error;
    }
    return null;
  }
}
