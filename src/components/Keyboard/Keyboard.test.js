import React from "react";
import ReactDOM from "react-dom";
import Keyboard from "./Keyboard";
import { shallow } from "enzyme";

describe("Keyboard", () => {
  it("should render without errors", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(<Keyboard />, container);
  });

  it("should find the key slot", () => {
    const wrapper = shallow(<Keyboard />);
    expect(wrapper.find('[data-qa="key-a"]').text()).toEqual("A");
  });
});
