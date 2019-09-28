import {Component} from '@angular/core';
import {RecipeService} from './recipe.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {

  subs: Subscription;

  constructor(private recipeService: RecipeService) {
  }
}
