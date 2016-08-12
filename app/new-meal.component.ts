import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="meal-form">
      <img class="green-tracker" src="./../resources/images/green-tracker.png">
      <h3>Log New Meal</h3>
      <input placeholder="Name" class="input-lg" #newName>
      <input placeholder="Details" class="input-lg" #newDetails>
      <input placeholder="Calories" class="input-lg" #newCalories>
      <button type="button" (click)="addMeal(newName, newDetails, newCalories)" class="btn-success btn-lg">Log</button>
      <hr>
    </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<String[]>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement, userDetails: HTMLInputElement, userCalories: HTMLInputElement) {
    var params: String[] =[userName.value, userDetails.value, userCalories.value];
    this.onSubmitNewMeal.emit(params);
    userName.value = "";
    userDetails.value = "";
    userCalories.value = "";
  }
}
