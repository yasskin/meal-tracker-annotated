import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <h3>"{{ meal.name }}"</h3>
    <h4>Details: "{{ meal.details }}"</h4>
    <h4>Calories: {{ meal.calories }}</h4>
    `
}) // {{ mustache tags }}
export class MealComponent {
  public meal: Meal;
}
