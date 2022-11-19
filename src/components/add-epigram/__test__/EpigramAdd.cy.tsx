import { mount } from "cypress/react";
import EpigramAdd from "../EpigramAdd";

const HandleShowAdd = () => {};
const SaveEpigram = () => {};

describe("show elements", () => {
  beforeEach(() => {
    mount(
      <EpigramAdd HandleShowAdd={HandleShowAdd} SaveEpigram={SaveEpigram} />
    );
  });

  it("should show save button in DOM", () => {
    cy.get(".btn-add").should("exist");
    cy.get(".btn-add").should("have.text", "Save");
  });

  it("should show cancel button in DOM", () => {
    cy.get(".btn-cancel").should("exist");
    cy.get(".btn-cancel").should("have.text", "Cancel");
  });
});

describe("the textbox", () => {
  beforeEach(() => {
    mount(
      <EpigramAdd HandleShowAdd={HandleShowAdd} SaveEpigram={SaveEpigram} />
    );
  });

  it("should show text typed on the textbox", () => {
    cy.get(".newEpigram").type("This is a test");
    cy.get(".newEpigram").should("have.value", "This is a test");
  });

  it("should not find text after cancel", () => {
    cy.get(".newEpigram").type("This is a test");
    cy.get(".btn-cancel").click();
    cy.get(".newEpigram").should("have.value", "");
  });

  it("should show an error when the textbox is empty", () => {
    cy.get(".btn-add").click();
    cy.get(".userform__error").should("exist");
    cy.get(".userform__error").should("have.text", "It is required.");
  });

  it("should not show an error when the textbox is full", () => {
    cy.get(".newEpigram").type("This is a test");
    cy.get(".btn-add").click();
    cy.get(".userform__error").should("not.exist");
  });
});
