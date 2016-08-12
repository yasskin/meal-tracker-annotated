import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <h3>Name: <strong>"{{ meal.name }}"</strong></h3>
    <h5>Details: "{{ meal.details }}"</h5>
    <h5>Calories: {{ meal.calories }}</h5>
    `
})
export class MealComponent {
  public meal: Meal;
}
