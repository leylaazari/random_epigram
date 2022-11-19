import { mount } from "cypress/react";
import React from "react";

describe("show elements", () => {
  beforeEach(() => {
    cy.request({
      url: "http://localhost:3000",
      failOnStatusCode: false,
    }).then((response) => {
      if (response.isOkStatusCode) {
        cy.visit("http://localhost:3000");
      } else {
        cy.visit("http://localhost:3000");
      }
    });
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
    cy.visit("http://localhost:3000/Home");
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

describe("save new pigram", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/Home");
    cy.get("[data-test=btnShowAdd]").click();
  });

  it("should show save button in DOM", () => {
    cy.get(".btn-add").should("exist");
    cy.get(".btn-add").should("have.text", "Save");
  });

  it("should show cancel button in DOM", () => {
    cy.get(".btn-cancel").should("exist");
    cy.get(".btn-cancel").should("have.text", "Cancel");
  });

  it("should show text typed on the textbox", () => {
    cy.get(".newEpigram").type("This is a test");
    cy.get(".newEpigram").should("have.value", "This is a test");
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

  it("should save new Epigram in localStorage", () => {
    localStorage.clear();
    cy.get(".newEpigram").type("This is a test");
    cy.get(".btn-add").click();
    const epigramList = localStorage.getItem("epigramList");
    if (epigramList) {
      cy.get(".newEpigram").contains(epigramList[0]);
    }
  });
});
