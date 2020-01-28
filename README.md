# Dumb Keyboard
A generic purpose keyboard to be adapted as you wish

## Creating the application
```
npx create-react-app dumb-keyboard
```

## TDDing

#### Failing the most basic test
Creat a file under `src/components/Keyboard` named `Keyboard.test.js`.
```javascript
import React from "react";
import ReactDOM from "react-dom";

describe("Keyboard", () => {
  it("should render without errors", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(<Keyboard />, container);
  });
});
```
Run `yarn test`.
#### Passing the most basic test 
Test will obviously fail, let´s create the component  `Keyboard.js` under `src/components/Keyboard`. It is just to start 
our basic development.
```javascript
import React from "react";

const Keyboard = () => <div>keyboard</div>;

export default Keyboard;
```
And change the previous test.
```javascript
.
.
.
import Keyboard from "./Keyboard";

describe("Keyboard", () => {
.
.
.
```
Run `yarn test`. Now the most basic test of all has passed!

#### Complicating things
A keyboard needs a layout to hold the keys by their type. Let's assume a calculator machine like the one below.
```
[/][*][-][  +  ]
[7][8][9][  .  ]
[4][5][6][  ,  ]
[1][2][3][ENTER]
[       0      ]
```

All the keys must be there, at least! 


