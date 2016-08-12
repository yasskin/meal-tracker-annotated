import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Cameron's Meal Tracker!</h1>
      <meal-list
        [mealList]="meals"
        (onMealSelect)="mealWasSelected($event)">
        </meal-list>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Breakfast", "Soylent", 250, 0),
      new Meal("Lunch", "Burger", 600, 1),
      new Meal("Second Lunch", "Curry", 500, 2),
      new Meal("Dinner", "Pasta", 700, 3)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
console.log('parent', clickedMeal);
  }
}
