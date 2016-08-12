import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1 class="meal-tracker">Meal Tracker</h1>
      <br>
      <div>
        <img class="logo" src="./../resources/images/logo.png">
      </div>
      <hr>
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
      new Meal("Breakfast", "Beorn's Honey Nut Cake served with Bilbo's Orange Marmalade; Eatten as soon as I wake up", 150, 0),
      new Meal("Second Breakfast", "Strawberry and Banana French Toast with Sausage and Bacon. Taken at about half past ten", 650, 1),
      new Meal("Elevenses", "Merry's Mulled Cider, Elven Lembas Bread", 200, 2),
      new Meal("Luncheon", "Po-Tay-To Onion Soup", 280, 3),
      new Meal("Afternoon Tea", "Tea and seed cakes, mince pie, and apple tart", 400, 4),
      new Meal("Dinner", "Balin's Spiced Beef and pork pie", 700, 5),
      new Meal("Supper", "Cold chicken, cheese, eggs, pickles, raspberry jam, and salad", 500, 6),
      new Meal("Dessert", "Ten Cup Ranger Cookies", 150, 7),
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
  }
}
