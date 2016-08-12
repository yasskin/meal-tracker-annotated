import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Cameron's Meal Tracker!</h1>
      <h3 *ngFor="#meal of meals" (click)="mealWasSelected(meal)">{{ meal.name }}, {{ meal.details }}, {{ meal.calories }}</h3>
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
