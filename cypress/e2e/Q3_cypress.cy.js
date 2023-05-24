// import { faker } from "@faker-js/faker";

describe("template spec", () => {
  it.skip("Create User test", () => {
    cy.request({
      url: "https://practice.expandtesting.com/notes/api/users/register",
      method: "POST",
      headers: {
        accept: "application/json",
      },
      body: {
        name: "qsdfgn",
        email: "qsdgf@fg.com",
        password: "qsdfgh",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq("User account created successfully");
      expect(response.body.success).to.equal(true);
    });
  });

  it("Login user test", () => {
    cy.request({
      url: "https://practice.expandtesting.com/notes/api/users/login",
      method: "POST",
      headers: {
        accept: "application/json",
      },
      body: {
        email: "qf@gt.com",
        password: "azerty",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("Login successful");
      expect(response.body.success).to.equal(true);
    });
  });

  it("create a Note", () => {
    cy.request({
      url: "https://practice.expandtesting.com/notes/api/notes/",
      method: "POST",
      headers: {
        accept: "application/json",
        "x-auth-token":
          "703cb57b83244ae6a784eddd8ad5fa11cd189d104f054c489450ab1ea128c29b",
      },
      body: {
        title: "qf@gt.com",
        description: "azerty",
        category: "Home",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("Note successfully created");
      expect(response.body.success).to.equal(true);
    });
  });
});

// token: 703cb57b83244ae6a784eddd8ad5fa11cd189d104f054c489450ab1ea128c29b
//id : 646e200656390602117642fd
