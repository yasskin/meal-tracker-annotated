import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'meal-list', // component selector <meal-list> tag, used to load this component in AppComponent
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [CaloriesPipe],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  template: `
    <div class="col-md-10 col-md-offset-1">
      <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
      <select class="btn-lg" (change)="onChange($event.target.value)">
        <option value="showAll" selected="selected">Show All</option>
        <option value="over500">Show High Calorie Meals</option>
        <option value="under500">Show Low Calorie Meals</option>
      </select>
      <meal-display *ngFor="#currentMeal of mealList | calories:selectedCalories"
        (click)="mealClicked(currentMeal)"
        [class.selected]="currentMeal === selectedMeal"
        [meal]="currentMeal">
      </meal-display>
      <edit-meal-details
        *ngIf="selectedMeal"
        [meal]="selectedMeal">
      </edit-meal-details>
    </div>
  ` // *ngFor is a special keyword that is a directive build into Angular; it creates a for each loop in the template; mealList is the array, currentMeal is the element
  //
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public selectedCalories: string = "showAll"
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void { // the method triggered on click event
  // mealClicked takes a parameter called clickedMeal, of the type Meal (our Model)
  // void means the function does not return anything
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(params: string[]): void {
    this.mealList.push(
      new Meal(params[0], params[1], parseInt(params[2]), this.mealList.length)
    );
  }
  onChange(optionFromMenu) {
    this.selectedCalories = optionFromMenu;
  }
}
