import { Component, EventEmitter } from 'angular2/core'; // imports the Component and EventEmitter code from the Angular library
// EventEmitters handle DOM interaction
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

// the app.component.ts is special: it holds our entire app.
// app.component.ts is the root component - it loads all the child components

// The Component Annotation
@Component({ // @Component is called a decorator and it defines our annotation
  selector: 'my-app', // component selector - the DOM element the component is attached to (an HTML tag in this case)
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
  ` // template : the HTML we want to display inside our selector
})

// The Component Class Declaration: It holds the data and methods necessay to make the template HTML functional
// AppComponent seems to be the Controller class, and it is defined here.
export class AppComponent { // export keyword make the component available to other components
  public meals: Meal[]; // Meal[] ( or Array<Meal> ) meals variable is an empty array of Meal objects
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
    ]; // instantiates several meals and put them into the array
  }
  mealWasSelected(clickedMeal: Meal): void {
  } // trigers a method when a meal is clicked
}
