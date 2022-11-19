import { mount } from "cypress/react";
import EpigramAddContainer from "../EpigramAddContainer";

const HandleShowAdd = () => {};

describe("save new Epigram", () => {
  it("should save new Epigram in localStorage", () => {
    mount(<EpigramAddContainer HandleShowAdd={HandleShowAdd} />);
    localStorage.clear();
    cy.get(".newEpigram").type("This is a test");
    cy.get(".btn-add").click();
    const epigramList = localStorage.getItem("epigramList");
    if (epigramList) {
      cy.get(".newEpigram").contains(epigramList[0]);
    }
  });
});
