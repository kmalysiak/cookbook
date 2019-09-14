import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  styleUrls: ['./recipe-item.component.css'],
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  onRecipeSelection($event: MouseEvent) {
    this.recipeSelected.emit();
  }
}
