import {Component, Input} from '@angular/core';
import {Recipe} from '../../recipe.model';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  styleUrls: ['./recipe-item.component.css'],
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(private recipeService: RecipeService) {

  }

  onRecipeSelection($event: MouseEvent) {
    this.recipeService.recipeSelected.next(this.recipe);
  }

}
