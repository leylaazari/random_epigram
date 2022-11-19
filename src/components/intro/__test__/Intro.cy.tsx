import { mount } from "cypress/react";
import Intro from "../Intro";

describe("Intro", () => {
  it("should show image in DOM", () => {
    mount(<Intro />);
    cy.get(".imageContainer").should("exist");
  });
});
