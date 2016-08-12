import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <h3>Name: <strong>"{{ meal.name }}"</strong></h3>
    <h4>Details: "{{ meal.details }}"</h4>
    <h4>Calories: {{ meal.calories }}</h4>
    `
})
export class MealComponent {
  public meal: Meal;
}
