import { mount } from "cypress/react";
import EpigramDisplayContainer from "../EpigramDisplayContainer";

describe("show elements", () => {
  beforeEach(() => {
    mount(<EpigramDisplayContainer />);
  });

  it("should show a text", () => {
    cy.get("[data-test=epigram]").should("exist");
    cy.get("[data-test=epigram]")
      .invoke("text")
      .then((text) => {
        expect(text.length).to.be.at.least(1);
      });
  });

  it("should change text after click on Change Epigram", () => {
    const text = cy.get("[data-test=epigram]");
    cy.get("[data-test=change-epigram]").click();
    cy.get("[data-test=epigram]")
      .invoke("text")
      .then((text) => {
        expect(text.length).to.be.at.least(1);
      });
    cy.get("[data-test=epigram]").should("not.eq", text);
  });
});

describe("refresh epigram", () => {
  beforeEach(() => {
    mount(<EpigramDisplayContainer />);
  });

  it("should checked Automatic Change", () => {
    cy.get("[data-test=form-check-input]").uncheck().and("have.value", "no");
  });

  it("should show Refresh if Automatic Change is checked", () => {
    cy.get("[data-test=form-check-input]").check();
    cy.get(".refresh-after").should("exist");
  });

  it("should not show Refresh if Automatic Change is not checked", () => {
    cy.get("[data-test=form-check-input]").uncheck();
    cy.contains(".refresh-after").should("not.exist");
  });

  it("should show 10 for initial value", () => {
    cy.get("[data-test=form-check-input]").check();
    cy.get(".refresh-after").should("have.text", "Refresh After: 10 s");
  });

  it("should show 0 after 0 s for refresh value", () => {
    cy.get("[data-test=form-check-input]").check();
    cy.wait(10000);
    cy.get(".refresh-after").should("have.text", "Refresh After: 0 s");
  });

  it("should show new text in 0 s for refresh value", () => {
    cy.get("[data-test=form-check-input]").check();
    cy.wait(10000);
    const text = cy.get("[data-test=epigram]");
    cy.get("[data-test=epigram]")
      .invoke("text")
      .then((text) => {
        expect(text.length).to.be.at.least(1);
      });
    cy.get("[data-test=epigram]").should("not.eq", text);
  });
});
