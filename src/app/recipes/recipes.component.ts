import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  SelectedRecipe: Recipe;

  onRecipeSelected(recipe: Recipe) {
    this.SelectedRecipe = recipe;
  }

  constructor() {
    this.SelectedRecipe = new Recipe('', '', '');
  }

  ngOnInit(): void {}
}
