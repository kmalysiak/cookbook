import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {

  ingredientChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Ketchup', 1)
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }
}
