import React from "react";
import { create, act } from "react-test-renderer";
import SearchBar from "../SearchBar";

describe("Search bar component", () => {
  test("Search bar component matches the snapshot", () => {
    const searchbar = create(<SearchBar />);
    expect(searchbar.toJSON()).toMatchSnapshot();
  });

});