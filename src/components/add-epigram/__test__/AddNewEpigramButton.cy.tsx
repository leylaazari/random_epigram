import { mount } from "cypress/react";
import AddNewEpigramButton from "../AddNewEpigramButton";

const HandleShowAdd = () => {};

describe("show elements", () => {
  it("should show button in DOM", () => {
    mount(<AddNewEpigramButton HandleShowAdd={HandleShowAdd} />);
    cy.get(".btnShowAdd").should("exist");
    cy.get(".btnShowAdd").should("have.text", "Add New Epigram");
  });
});
