import { faker } from "@faker-js/faker";

const randomName = faker.person.firstName();
const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();
const notes = require("../fixtures/example.json");

describe("template spec", () => {
  let token = null;

  it("Create User test", () => {
    cy.request({
      url: "https://practice.expandtesting.com/notes/api/users/register",
      method: "POST",
      headers: {
        accept: "application/json",
      },
      body: {
        name: randomName,
        email: randomEmail,
        password: randomPassword,
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
        email: randomEmail,
        password: randomPassword,
      },
    }).then((response) => {
      cy.log(JSON.stringify(response));
      token = response.body.data.token;
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("Login successful");
      expect(response.body.success).to.equal(true);
    });
  });

  it("create a Note", () => {
    const note = notes[0];
    cy.request({
      url: "https://practice.expandtesting.com/notes/api/notes/",
      method: "POST",
      headers: {
        accept: "application/json",
        "x-auth-token": token,
      },
      body: {
        title: note.title,
        description: note.description,
        category: note.category,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("Note successfully created");
      expect(response.body.success).to.equal(true);
    });
  });
  it("create a Note", () => {
    const note = notes[1];
    cy.request({
      url: "https://practice.expandtesting.com/notes/api/notes/",
      method: "POST",
      headers: {
        accept: "application/json",
        "x-auth-token": token,
      },
      body: {
        title: note.title,
        description: note.description,
        category: note.category,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("Note successfully created");
      expect(response.body.success).to.equal(true);
    });
  });
  it("create a Note", () => {
    const note = notes[2];
    cy.request({
      url: "https://practice.expandtesting.com/notes/api/notes/",
      method: "POST",
      headers: {
        accept: "application/json",
        "x-auth-token": token,
      },
      body: {
        title: note.title,
        description: note.description,
        category: note.category,
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
