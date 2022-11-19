import { mount } from "cypress/react";
import HomeContainer from "../HomeContainer";

describe("show panels", () => {
  beforeEach(() => {
    mount(<HomeContainer />);
  });

  it("should DisplayEpigram at the first ", () => {
    cy.get("[data-test=epigram-display-container]").should("exist");
    cy.get("[data-test=form-new-epigram]").should("not.exist");
  });

  it("should EpigramAdd after click on btnShowAdd", () => {
    cy.get("[data-test=btnShowAdd]").click();
    cy.get("[data-test=form-new-epigram]").should("exist");
    cy.get("[data-test=epigram-display-container]").should("not.exist");
  });
});

describe("show elements", () => {
  it("should show button in DOM", () => {
    mount(<HomeContainer />);
    cy.get("[data-test=btnShowAdd]").should("exist");
    cy.get("[data-test=btnShowAdd]").should("have.text", "Add New Epigram");
  });
});
