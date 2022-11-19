import { mount } from "cypress/react";
import About from "../About";

describe("About", () => {
  it("should show box in DOM", () => {
    mount(<About />);
    cy.get(".about-container").should("exist");
  });
});
