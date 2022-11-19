import { mount } from "cypress/react";
import EpigramDisplay from "../EpigramDisplay";

describe("show elements", () => {
  it("should show epigram in DOM", () => {
    mount(<EpigramDisplay epigram="This is a test." />);
    cy.get("[data-test=epigram]").should("exist");
    cy.get("[data-test=epigram]").should("have.text", "This is a test.");
  });
});
