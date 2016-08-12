import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [CaloriesPipe],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  template: `
    <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
    <select (change)="onChange($event.target.value)">
      <option value="showAll" selected="selected">Show All</option>
      <option value="over500">Show 500 Plus Calories Meals</option>
      <option value="under500">Show Under 500 Calories Meals</option>
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
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public selectedCalories: string = "showAll"
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
console.log('child', clickedMeal);
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
console.log(this.selectedCalories);
  }
}
