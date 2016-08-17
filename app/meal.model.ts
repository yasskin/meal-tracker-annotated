export class Meal { // CLASS DEFINITION - declares a class called Meal - blueprint for objects. Meal has 4 properties
  constructor(public name: string, public details: string, public calories: number, public id: number) { // 'constructor' is a keyword that says a Meal object must be passed two strings and two numbers on initialization
  // the constructor creates properties called name, details, calories and id
  // 'public' is shorthand which will automatically assign the incoming parameter (string or number) to a public property of the same type and name as declared in the constructor; public means they can be accessed from anywhere
  // pubilc creates this.name, this.details, this.calories, this.id
  }
}
