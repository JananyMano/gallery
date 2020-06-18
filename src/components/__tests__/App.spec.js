import React from "react";
import { create } from "react-test-renderer";
import App from "../App";

describe("App", () => {
  test("App component matches the snapshot", () => {
    const app = create(<App />);
    expect(app.toJSON()).toMatchSnapshot();
  });
});