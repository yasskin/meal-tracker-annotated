import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
    <div class="meal-form">
    <div>
      <img class="red-tracker" src="./../resources/images/red-tracker.png">
    </div>
    <h3>Edit Meal</h3>
    <input [(ngModel)]="meal.name" class="input-lg meal-form">
    <input [(ngModel)]="meal.details" class="input-lg meal-form">
    <input [(ngModel)]="meal.calories" class="input-lg meal-form">
    </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
