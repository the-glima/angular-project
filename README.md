# Angular Project

An Angular project that renders an endpoint and display some data.

## Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.1. And (Yarn)[https://classic.yarnpkg.com/en/docs/cli/install/]. If already have it installed just run:

```sh
$ yarn
```

If not:

```sh
$ yarn global add @angular/cli
```

> If you don't have Yarn installed replace the `yarn` commands with the equivalent using `npm` instead.

## Running the application

### API
In `/api` directory there's a simple API made in NodeJS that creates the data and endpoint for the client to consume.

You need to run the API serve to see the data:

```sh
$ cd api
$ yarn serve
```

> API will run on https://localhost:8080

### Client

Just run:

```sh
$ cd client
$ yarn start
```

## Technologies Stack

- Angular 12.0.1
- NGRX
- ES6+
- SCSS
- NG SVG Sprite icons

### Themes

You can write your own theme and apply your custom styles. There're currently two themes available: _Default_ and _Dark_ Theme.
To create a new theme see how `src/assets/scss/theme/` are structured, the most important file that you'll edit is the `variables.scss`.

#### Enabling a theme

Import your new theme on `src/assets/scss/theme`.

> IMPORTANT: Default Theme contains the base for all styles and should always be imported as last.

#### Components SCSS

_Required_: if you are using a global function, mixing or variable you need to import them in the component file:

component.scss

```
@import 'theme';
```

## License

Copyright (c) Gabriel Lima Licensed under the MIT license.
