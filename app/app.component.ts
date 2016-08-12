import { Component } from 'angular2/core';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  template: `
    <h3 *ngFor="#currentMeal of mealList" (click)="mealClicked(currentMeal)">
      {{ currentMeal.name }}, {{ currentMeal.details }}, {{ currentMeal.calories }}
    </h3>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  mealClicked(clickedMeal: Meal): void {
console.log(clickedMeal);
  }
}

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Cameron's Meal Tracker!</h1>
      <meal-list [mealList]="meals"></meal-list>
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
console.log(clickedMeal);
  }
}

export class Meal {
  constructor(public name: string, public details: string, public calories: number, public id: number) {

  }
}
