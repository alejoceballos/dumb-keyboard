import React from "react";
import ReactDOM from "react-dom";
import Keyboard from "./Keyboard";

describe("Keyboard", () => {
  it("should render without errors", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(<Keyboard />, container);
  });

  it("should find all keys slots", () => {
    const layout = [
      ["/", "*", "-", "+"],
      ["7", "8", "9", "."],
      ["4", "5", "6", ","],
      ["1", "2", "3", "ENTER"],
      ["0"]
    ];
  });
});
