# GitHub Link Creator

## Viewing / Installation

### Link

[Heroku link](http://bits2000.herokuapp.com/)

### To Run

-   Clone
-   Install packages: `npm i`
-   Run: `npm run start`
-   Go to `localhost:5000` in the browser

## How To Use

Input the name of the owner of the repo, and the repo. Once the user tabs out of the text input fields, and a valid entry is present in both, a link and a card are created.

Changing colors, button-sizes, and GitHub icon will modify the preview card.

Clicking on the link opens a new page with the card.

Clicking on the button takes the user to the respective GitHub repo.

## Improvements

-   'Owner' and 'repo' get validated only when the user tabs out of a textual input field. This UI could be improved in this respect.
-   GitHub's icon will not be visible on black backgrounds since it is black itself. Ideally this adopts the color of the text.

## Teck Stack

-   React
-   Hooks for State Management
-   Emotion for CSS
-   TypeScript
-   Webpack
