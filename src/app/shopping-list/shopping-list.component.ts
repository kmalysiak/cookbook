import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shoppinglist.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  private ingredients: Ingredient[];
  private subs: Subscription;

  constructor(private shoppingList: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingList.getIngredients();
    this.subs = this.shoppingList.ingredientChanged.subscribe((ingredients => this.ingredients = ingredients));
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
