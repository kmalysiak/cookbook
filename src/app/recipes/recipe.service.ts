import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shoppinglist.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {

  public recipeSelected = new Subject<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe 1',
      'A test 1',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient('cp11', 1),
        new Ingredient('cp12', 2)
      ]),
    new Recipe(
      'A test recipe 2',
      'A test 2',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient('cp21', 1),
        new Ingredient('cp22', 2)
      ]),
    new Recipe('A test recipe 3',
      'A test 3',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient('cp31', 1),
        new Ingredient('cp32', 2)
      ]),
    new Recipe(
      'A test recipe 4',
      'A test 4',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient('cp41', 1),
        new Ingredient('cp42', 2)
      ])
  ];

  public getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  public getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  public constructor(private shoppingList: ShoppingListService) {

  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingList.addIngredients(ingredients);
  }
}
