# _GitHub_

#### _Epicodus: JavaScript_

#### By _**Noah Yasskin**_

## Description

_This is an Epicodus [http://www.epicodus.com/] student  project created_

_A meal tracking application._
_Users can log foods they've eaten each day, including details about the meal and its number of calories. Foods being logged are for a single day (at this point it does not keep track of multiple days' meals)_

_For example_

```
---------
Name: "Hamburger"
Details: "Didn't get a soda or cheese on my burger!"
Calories: 354
---------
```
```
---------
Name: "Fries"
Details: "I only ate half of them."
Calories: 365
---------
```

Requirement & Objectives | Complete
:------------- | :-------------: |
*Requirement*: Tk. | X
*Objective*: Tk. | X
*Objective*: Tk. | X
*Objective*: Tk. | X
*Objective*: Tk. | X
*Objective*: Tk. | X
*Objective*: Tk. | X

_Angular Component Tree_

| Component        | Action           | Parent  |
| ------------- |:-------------:| -----:|
| AppComponent      | holds data | -- |
| *Component      | List | AppComponent |
| *Component      | New | AppComponent |
| *Component      | Edit | AppComponent |

## User Stories

_As a user…_

_I want to log a food I have eaten by submitting a form with food name, calories and details._
_I want to view a list of foods I have logged._
_I want options to view all foods, only high-calorie foods (more than 500 calories), or only lower-calorie foods (less than 500 calories)._
_I want to click a food to edit its name, details or calories (in case I decide to pretend my fries were 100 calories instead of 365)._

## Setup/Installation Requirements

Clone the repository from GitHub_
```
$Git clone https://github.com/yasskin/meal-tracker.git
```
Install globals for your computer, if needed (gulp, bower, sass, typescript, typescript packages.)

```
$ npm install gulp -g <!-- only needs to be done once -->
```
```
$ npm install bower -g <!-- only needs to be done once -->
```
```
$ gem install sass
```
```
$ npm install typescript -g
```
```
$ apm install atom-typescript
```
Gather the UI packages the program requires

```
$ bower install <!-- saved into bower_components/ -->
```
Gather the back-end packages the program requires

```
$ npm install <!-- saved into node_modules/ -->
```
Construct and display the App on the local server

```
$ gulp build
```
```
$ gulp serve
```

## Known Bugs

* _None so far_

## Support and contact details

* _View the repository on GitHub at:_
https://github.com/yasskin/

_If you run into any issues or have questions, ideas, or concerns, please feel free to contact Noah:_

* _Noah Yasskin: <a href="mailto:noahyasskin@gmail.com">noahyasskin@gmail.com</a>_

## Technologies Used

* _HTML & CSS_
* _Angular2_
* _SASS_
* _JavaScript_
* _Node.js_
* _Gulp_
* _Bower_

### License

*MIT License*

Copyright (c) 2016 **_Noah Yasskin_**

The MIT License (MIT)
Copyright (c) 2016, Noah Yasskin
https://opensource.org/licenses/MIT
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
