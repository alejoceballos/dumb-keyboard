# Dumb Keyboard 4 React

A generic purpose keyboard using React to be adapted as you wish.

Let's say that I dreamt about implementing a keyboard. I achieved that goal making a fast, functional, perhaps a 
maintainable/extensible one. That's okay, the goal was having a _qwerty_ keyboard, that goal was achieved.

But then a dreamt again, dreamt about this...

![Keyboard Abstraction](README.files/keyboard-abstraction.jpg "Keyboard Abstraction")

The main idea is that a simple board is nothing but a set of keys and according its manufacturer it may be transformed 
into a _qwerty_ keyboard or a calculator or... Who knows?

To follow this dream, I decided to start from scratch. Like I've never implemented a keyboard in my life. I am using 
[React](https://reactjs.org/ "React") simply because I'm currently working with this technology and mostly because it is 
my favorite [Single Page Application](https://en.wikipedia.org/wiki/Single-page_application "Single Page Application") 
framework! Also, I'm using [ECMAScript 6](http://es6-features.org/ "ECMAScript 6") syntax (ES6).

Let's try to make dreams reality! 

**NOTE:** For those using [IntelliJ IDEA](https://www.jetbrains.com/idea/ "IntelliJ IDEA") or any other tool from 
JetBrains that allows working with React, I add some settings that personally I find useful for development purposes, 
just check [IntelliJ IDEA Tips](README.files/IntelliJ-IDEA-tips.md "IntelliJ IDEA Tips"). I've added notes like this 
one, specific for the subject being presented.

## Creating the application

**NOTE:** For those using IntelliJ IDEA or any other tool from JetBrains that allows working with React, check 
[IntelliJ IDEA Tips](README.files/IntelliJ-IDEA-tips.md#Getting-rid-of-the-annoying-warning-"Unresolved-function-or-method-describe"-on-your-test-files "IntelliJ IDEA Tips")
to get rid of the annoying warning `Unresolved function or method describe` on your test files.

From [Creating a New React App](https://reactjs.org/docs/create-a-new-react-app.html "Creating a New React App"):
```shell script
npx create-react-app dumb-keyboard
```

## TDDing

#### Failing the most basic test

I'm using the bundled test framework that comes with React when using the `create-react-app` command, 
[Jest](https://jestjs.io/ "Jest"). It comes with the usual `describe`/`it` syntax found in other frameworks lie `mocha` 
and `jasmine`.

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
Here I use plain old Javascript DOM manipulation and [ReactDOM](https://reactjs.org/docs/react-dom.html "ReactDOM") to 
render a simple component.

I'm also using [Yarn](https://yarnpkg.com/ "Yarn") as my package manager since it is the one used by React by default.

Run `yarn test`.

#### Passing the most basic test 

The test will obviously fail, let´s create the component  `Keyboard.js` under `src/components/Keyboard`. It is just to 
start our basic development.
```javascript
// file: src/components/Keyboard/Keyboard.js

import React from "react";

const Keyboard = () => <div>keyboard</div>;

export default Keyboard;
```
And change the previous test importing our new component.
```javascript
// file: src/components/Keyboard/Keyboard.test.js
.
.
.
import Keyboard from "./Keyboard";

describe("Keyboard", () => {
.
.
.
```
Run `yarn test` again. Now the most basic test of all has passed!

NOTE: In order to keep the tests running after each code modification instead of running this command every single time,
run `yarn test --watch`.

#### Complicating things
A keyboard needs a layout to hold the keys by their type. Let me start humble. The keyboard has only one key.
```
[A]
```
To ease my work, I'll work with [Enzyme](https://airbnb.io/enzyme/ "Enzyme"). From the 
[installation guide](https://airbnb.io/enzyme/docs/installation/ "Installation Guide"), I'll install the version to be 
used with React 16 (or above?).

But since we are using Yarn:
```
yarn add --dev enzyme
yarn add --dev enzyme-adapter-react-16
```
Let's configure [src/setupTests.js](https://create-react-app.dev/docs/running-tests/#srcsetuptestsjs "setupTests.js") 
file to be able to test using Enzyme. Also, since we are using ES6, let's use the snippet below.
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
  it("should find a simple key", () => {
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

Let's add a set of different keys to the keyboard. 
```javascript 1.8
// file: src/components/Keyboard/Keyboard.test.js
.
.
.
it("should accept a dynamic set of keys", () => {
  const keyboardLayout = ['A', 'B', 'C'];
  const wrapper = shallow(<Keyboard layout={keyboardLayout} />);
    
  expect(wrapper.find('[data-qa="key-a"]').text()).toEqual("A");
  expect(wrapper.find('[data-qa="key-b"]').text()).toEqual("B");
  expect(wrapper.find('[data-qa="key-c"]').text()).toEqual("C");
});
.
.
.
```
It will obviously fail on the the second expectation. There is no layout property in our keyboard and "A" button is 
still hardcoded.

I'll change the code so it passes the test, but before that, I'll install a nice library called 
[lodash](https://lodash.com/ "lodash").

> A modern JavaScript utility library delivering modularity, performance & extras

It adds some null/undefined automatic checking, a lot of collections utility functions, and if properly used, 
allows using Javascript in a more functional way.
```
yarn add lodash
```
I'll also need to use string functions, and for similar reason as before, I'll install a small library for string 
manipulation that I'm very fond of, [voca](https://vocajs.com/ "voca"). According to the site:

> The Voca library offers helpful functions to make string manipulations comfortable: change case, trim, pad, slugify, 
> latinise, sprintf'y, truncate, escape and much more. The modular design allows to load the entire library, or 
> individual functions to minimize the application builds. The library is fully tested, well documented and long-term 
> supported. 
```
yarn add voca
```
And now, the code!
```javascript 1.8
// file: src/components/Keyboard/Keyboard.js

import React from "react";
import { map } from 'lodash';
import { lowerCase } from "voca";

const Keyboard = ({ layout }) => (
  <div>
    {map(layout, key => {
      const uniqueKey = `key-${lowerCase(key)}`;
      return (
        <button key={uniqueKey} data-qa={uniqueKey}>{key}</button>
      );
    })}
  </div>
);

export default Keyboard;
```
Our new test passed! But the previous one failed. Of course, if no layout is passed to our component, it will never 
render a key. Let me pass a simple layout with only "A" key to make it pass again.
```javascript 1.8
// file: src/components/Keyboard/Keyboard.test.js
  .
  .
  .
  it("should find a simple key", () => {
    const keyboardLayout = ['A'];
    const wrapper = shallow(<Keyboard layout={keyboardLayout} />);

    expect(wrapper.find('[data-qa="key-a"]').text()).toEqual("A");
  });
  .
  .
  .
```
Now it is all okay! Let's check how is our Keyboard being displayed! But I do not want to be able to check it in a 
running application, it is a simple component that currently does nothing and must not be integrated. Storybooks to the 
rescue!

## Visualizing the Component in Real Time

I really like Storybook to visually check if my components are being rendered as I want. It runs a separate server
locally that allows accessing all my components in a single, organized page!

Quoting the [Storybook for React site](https://storybook.js.org/docs/basics/introduction/ "Storybook for React"):
> Storybook is a user interface development environment and playground for UI components. The tool enables developers to 
> create components independently and showcase components interactively in an isolated development environment. 

I'll use the following command since I created my application with `create-react-app`.
```
npx -p @storybook/cli sb init --type react_scripts
```
According to the documentation:
> This command adds a set of boilerplate files for Storybook in your project

A set of development dependencies and scripts will be added to your `package.json` file, also a default configuration
will be created in `.storybook/main.js` and a basic example in `src/stories`.

You can check the default Storybook site and examples with the command below.
``` 
yarn storybook
``` 
The default STory Book can be seen by typing <http://localhost:9009> on your browser.

Now we can create a story for our component and check how it will be displayed in our application. Create a new 
file named `Keyboard.stories.js` named `src/stories`.
```javascript 1.8
import React from 'react';
import Keyboard from "../components/Keyboard/Keyboard";

export default {
  title: 'Keyboard',
  component: Keyboard,
};

export const Basic = () => <Keyboard layout={['A', 'B', 'C']} />;
``` 
It will create a story in the storybook named `Basic` under the `Keyboard` left menu. May not seem a big deal, but now 
we can decorate our keys with CSS and see how they will look like! 

Checking the Story Book, the one we have just created must be something similar to this:

![First Keyboard Look](README.files/first-storybook-keyboard.png "First Keyboard Look")

## Styling The Keyboard

To help me style my keys (and everything else) I'll use a component based styling framework called 
[Styled Components](https://styled-components.com/ "Styled Components"). I've been currently using it and although there 
are plenty other options I have been enjoying this one. There are a set of 
[motivations](https://styled-components.com/docs/basics#motivation "motivations") in the website that I mostly agree 
with.

**NOTE:** For those using IntelliJ IDEA or any other tool from JetBrains that allows working with React, check 
[IntelliJ IDEA Tips](README.files/IntelliJ-IDEA-tips.md#Styled-Components-Plugin "IntelliJ IDEA Tips") for a cool plugin 
that adds support to Styled Components.

So, let's install it! 
``` 
yarn add styled-components
``` 
But how should the keyboard look like? I have what I consider a "fancy" laptop keyboard (too fancy in my opinion) that I
could mimic. Something like this:

![Fancy Keyboard](README.files/fancy-keyboard.png "Fancy Keyboard")

Particularly, I'll focus on the background, text and borders. Using the browser's developer tools, I will get something 
like this:

![Changing Key Style in the Browser](README.files/changing-key-style-on-browser.png "Changing Key Style in the Browser")

Not the best CSS, I know, but I'm just trying to see how it would look like in real time. We can refactor it later.

Updating our keyboard using styled components would like just like that:
```javascript 1.8
// file: src/components/Keyboard/Keyboard.js

import React from "react";
import { map } from 'lodash';
import { lowerCase } from "voca";
import styled from "styled-components/macro";

const Key = styled.button`
    background-color: black;
    border-block-style: solid;
    border-color: red;
    border-radius: 3px;
    border-width: 2px;
    color: red;
    font-family: Arial;
    font-size: larger;
    height: 32px;
    margin: 2px;
    width: 32px;
`;

const Keyboard = ({ layout }) => (
  <div>
    {map(layout, key => {
      const uniqueKey = `key-${lowerCase(key)}`;
      return (
        <Key key={uniqueKey} data-qa={uniqueKey}>{key}</Key>
      );
    })}
  </div>
);

export default Keyboard;
```
Note three important things here:
1. Instead of `styled-components/macro` I could have imported just `styled-components`, but I wouldn't get more 
identifiable CSS class names prefixed by `Keyboard__Key` like `Keyboard__Key-sc-3kb479-0 jZPcQE`. They would be named 
only with something like `sc-3kb479-0 jZPcQE` making more difficult to understand which styled component is styling
that element;
2. The CSS is still there, after the desired element name, under template strings. It allows passing properties and 
applying conditionals using plain (ES6) Javascript code;
3. Instead of using React's default button component, now a new one has been created and may be used instead. I can do 
the same to my own components and also apply some sort of inheritance on them;

## Responding to Events

This is a keyboard, so I need that each key tells someone in the outer world that it was pressed. I don't want the key 
to directly change any input, label, header or whatever element that is supposed to be filled with letters on any page 
that wraps the keyboard. Keeping on with the abstraction, this virtual keyboard is like a real one. In the real world, 
most of the keyboards just send signals to the computer that interprets it and transforms it in whatever the signal must 
be transformed: render the letter "A" on a text editor, calls an application when "ENTER" is pressed on a focused 
shortcut in the desktop and so on.

So what do I expect from the keyboard right now? Nothing. I expect it from the key! Something is telling me that the key 
may be a component itself, and the keyboard is actually a composition of keys.

As TDD states, I'll start testing the key before implementing the component. But since I already know the basics of 
testing, and for the sake of not repeating these things, let me create the basic render test also to save some time.
```javascript 1.8
// src/components/Keyboard/Key.test.js

import React from "react";
import ReactDOM from "react-dom";
import Key from "./Key";
import { shallow } from "enzyme";

describe("Key", () => {
  it("should render without errors", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(<Key />, container);
  });

  it('should inform that it was pressed', () => {
    const onClickMock = jest.fn();
    const wrapper = shallow(<Key value="x" onClick={onClickMock} />);

    wrapper.simulate('click');
    expect(onClickMock).toBeCalledWith("x");
  });
});
```
I am using the `shallow` function from `enzyme` again. Since **Key** is a generic component now, we must inform which 
key is being rendered and somehow retrieve that it was pressed. This will be achieved by passing a function to our 
"onClick" event. This function will be called by passing the key's value as argument. Jest and enzyme allows me to 
simulate a click on the Key component and check what happened to the function passed as "click" event. 

I will assume that our new component will need a string `value` property to dynamic render the key letter and another 
function `onClick` property that must be called when the button is pressed. 

For the component, I'll grab a lot of the code that was already implemented inside the keyboard. The code to make these 
tests pass will be something similar to the one below:
```javascript 1.8
// src/components/Keyboard/Key.js

import React from "react";
import { lowerCase } from "voca";
import styled from "styled-components/macro";

const StyledButton = styled.button`
    background-color: black;
    border-block-style: solid;
    border-color: red;
    border-radius: 3px;
    border-width: 2px;
    color: red;
    font-family: Arial, serif;
    font-size: larger;
    height: 32px;
    margin: 2px;
    width: 32px;
`;

const Key = ({value, onClick}) => (
  <StyledButton data-qa={`key-${lowerCase(value)}`} onClick={() => onClick(value)}>
    {value}
  </StyledButton>
);

export default Key;
```
React's `button` component inherited from the styled component created allows using the `onClick` event. It is the 
corresponding `onclick` event from HTML's button. Both properties are being destructured as function parameters and the 
event the key being pressed is being returned using an anonymous arrow function in the `onClick` event.

## Properties Validation

I have created a component that needs values passed to its properties in order to be rendered correctly. As the 
application grows it will become harder and harder to manage properties checking. In that case I'll use 
[PropTypes](https://github.com/facebook/prop-types "PropTypes").

> Runtime type checking for React props and similar objects ... will check props passed to your components against those 
> definitions, and warn in development if they don’t match.
 
Before React 15.5 it was normally bundled within React. Now it is part of a separate library since it can be used with 
other frameworks now. So I'll install PropTypes.
```shell script
yarn add prop-types
```
To apply the validations I'll change `Key.js` file.
```javascript 1.8
// src/components/Keyboard/Key.js

.
.
.
import PropTypes from 'prop-types';
.
.
.
Key.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Key.defaultProps = {
  onClick: () => {}
};

export default Key;
```
I added two properties validators, one being required and the other one, although it is not required, it will receive 
a default value if not passed.

Check 
[PropTypes documentation](https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes "PropTypes documentation") 
for all validators types.

Current modern browsers, some with the right plugins, may warn you about wrong component usage regarding attributes 
validations. Take IntelliJ's example below.

![IntelliJ IDEA tip](README.files/intellij-no-required-attribute-tip.png "IntelliJ IDEA tip")

A better way to check on this validations not relying on IDE's features would be using ESLint. Adding ESLint to my 
application and not allowing it to run unless all validations are okay is a good way to keep my code clean and standards
following.

## Finding and Fixing problems using ESLint

[ESLint](https://eslint.org/ "ESLint") is a static checker that verifies and sometimes automatically fixes problems in 
your code based on a set of rules configured in a file. It can point me out potential risks from my code and suggest 
corrections. 

According to the website:
> ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of 
> making code more consistent and avoiding bugs. In many ways, it is similar to JSLint and JSHint... 

A drawback is that ESLint CLI initializer uses [npm]() as its package manager. Usually I don't like having two package 
managers handling my libraries so I could install some ESLint dependencies myself using Yarn. I don't know if it would 
make any difference, that's me being suspicious. I'll try installing the dependencies myself and check if it works.

Install everything, ESLint + dependencies.
```shell script
yarn add eslint --dev
yarn add eslint-plugin-react@latest --dev
yarn add eslint-config-google@latest --dev
```
Set up the default configuration file.
```shell script
npx eslint --init
```
I decided to answer the base questions to determine my ESLint settings. My choices are below:
```
? How would you like to use ESLint? To check syntax, find problems, and enforce code style              
? What type of modules does your project use? JavaScript modules (import/export)                        
? Which framework does your project use? React                                                          
? Does your project use TypeScript? No                                                                  
? Where does your code run? Browser                                                                     
? How would you like to define a style for your project? Use a popular style guide                      
? Which style guide do you want to follow? Google: https://github.com/google/eslint-config-google       
? What format do you want your config file to be in? JavaScript  
? Would you like to install them now with npm? No   
```
A message like the one below may show up in your terminal, it did to me.
```
Warning: React version not specified in eslint-plugin-react settings. 
See https://github.com/yannickcr/eslint-plugin-react#configuration .
```
It has a set of preset rules that can be used. I may or may not use it later, but now I'll test my new linter. 
Run it.
```shell script
npx eslint src/components/Keyboard/Key.test.js
```
And look at that!
```
/dumb-keyboard/src/components/Keyboard/Key.test.js                                   
 1:19  error  Strings must use singlequote         quotes                                                
 2:22  error  Strings must use singlequote         quotes                                                
 3:17  error  Strings must use singlequote         quotes                                                
 4:9   error  There should be no space after '{'   object-curly-spacing                                  
 4:17  error  There should be no space before '}'  object-curly-spacing                                  
 4:25  error  Strings must use singlequote         quotes                                                
 6:10  error  Strings must use singlequote         quotes                                                
 7:6   error  Strings must use singlequote         quotes                                                
 8:46  error  Strings must use singlequote         quotes                                               
18:40  error  Strings must use singlequote         quotes                                                                                                                                                     ✖ 10 problems (10 errors, 0 warnings)                                                                     10 errors and 0 warnings potentially fixable with the `--fix` option.  
```
Seems I've been programming quite against Google's rules! Let's see what ESLint can do for me.
```shell script
npx eslint src/components/Keyboard/Key.test.js --fix
```
And _voilá_! But it still didn't identified my Key component with no attributes, let's try to make it see this mistake.

**To Be Continued**

## Visualizing our Key Component

**To Be Continued**

## Applying keys to the Keyboard

**To Be Continued**
