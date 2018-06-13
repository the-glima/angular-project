# Rendering Transactions
An Angular project to search users via the Github Search API.

# Stack

- Angular 5.2.0
- SCSS
- Layout: this project is based on Flexible Box Layout ([see the support](https://caniuse.com/#feat=flexbox))

### Components
- Credit Card Brand: shows the brand icon bases on the card number (Regex)
- Dropdown: handle dropdown/select options
- Fitler: colletion of dropdowns and submission of selected options
- Header: structure, contains the filters
- Loading: an icon and text (optionals) to show feedback when something is loading
- Transaction: shows transactions list
  - List: colletion of transactions items
  - Item: single transaction with data
    - Card: credit card info of single transaction

### Services
- ApiInterceptor: to intercept every request and handle authorization
- DropdownService: handle selecting options on drodown
- TransactionService: get transaction form endpoint. Hand;es comunication when transactions are updated or needs to update.

### Models
All used interfaces.

### Animations
Collection of animation to use across components.

### Themes
You can write your own theme and apply your custom styles. There're currently two themes available: *Default* and *Dark* Theme.
To create a new theme see how `src/assets/scss/theme/` are structured, the most important file that you'll edit is the `config/_variable.theme.scss`.

#### Enabling a theme
Import your new theme on `src/assets/scss/theme/import.theme.scss`.
> IMPORTANT: Default Theme contains the base for all styles and should always be imported as last.

#### Components SCSS
*Required*: you need to import the theme file on each component to be able to access all global _styling/mixins/variables/functions_ E.g:

component.scss
```
@import 'theme/import.theme';
```


## Angular CLI
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
