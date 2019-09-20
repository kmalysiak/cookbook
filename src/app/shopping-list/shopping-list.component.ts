import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {

  private ingredients: Ingredient[];

  constructor(private shoppingList: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingList.getIngredients();
    this.shoppingList.ingredientChanged.subscribe((ingredients => this.ingredients = ingredients));
  }
}
