# Dumb Keyboard
A generic purpose keyboard to be adapted as you wish

Let's say that I dreamt about implementing a keyboard. I achieved that goal making a fast, functional, perhaps a 
maintainable/extensible one. That's okay, the goal was having a _qwerty_ keyboard, that goal was achieved.

But then a dreamt again, dreamt about this...

![Keyboard Abstraction](README.files/keyboard-abstraction.jpg "Keyboard Abstraction")

The main idea is that a simple board is nothing but a set of keys and according its manufacturer it may be transformed 
into a _qwerty_ keyboard or a calculator or... Who knows?

To follow this dream, I decided to start from scratch. Like I've never implemented a keyboard in my life.

Let's try to make dreams reality! 

## Creating the application
```
npx create-react-app dumb-keyboard
```

## TDDing

**NOTE:** For those using IntelliJ IDEA or any other tool from JetBrains that allows working with React, I add some 
settings that personally I find useful for development purposes, just check [IntelliJ IDEA Tips](README.files/IntelliJ-IDEA-tips.md "IntelliJ IDEA Tips");

#### Failing the most basic test
Creat a file under `src/components/Keyboard` named `Keyboard.test.js`.
```javascript
// file: src/components/Keyboard/Keyboard.test.js

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
// file: src/components/Keyboard/Keyboard.js

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
A keyboard needs a layout to hold the keys by their type. Let's start humble. The keyboard has only one key.
```
[A]
```

To ease my work, I'll work with `enzyme` (https://airbnb.io/enzyme/). From the installation guide, I'll install the 
version to be used with React 16 (or above?).

Reference: https://airbnb.io/enzyme/docs/installation/

But since we are using Yarn:
```
yarn add --dev enzyme
yarn add --dev enzyme-adapter-react-16
```
Let's configure `src/setupTests.js` file to be able to test using Enzyme. Also, since we are using ES6, let's use this 
snippet below.
```javascript 1.8
// file: src/setupTests.js

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

Now let's add some test cases using enzyme capabilities.

```javascript 1.8
// file: src/components/Keyboard/Keyboard.test.js

. 
. 
.
import { shallow } from "enzyme";

describe("Keyboard", () => {
  .
  .
  .
  it("should find the key slot", () => {
    const wrapper = shallow(<Keyboard />);
    expect(wrapper.find('[data-qa="key-a"]').text()).toEqual("A");
  });
});
```

As expected, it will fail. Let's fix it.

```javascript 1.8
// file: src/components/Keyboard/Keyboard.js

import React from "react";

const Keyboard = () => (
  <div>
    <button data-qa="key-a">A</button>
  </div>
);

export default Keyboard;
```

That's simple and it really ain't a Keyboard, actually. Let's make it more dynamic so it can accept different keys.

TBD