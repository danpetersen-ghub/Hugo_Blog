+++
categories = [ "All", "JavaScript", "Automated Tests" ]
date = 2022-04-20T08:00:00.000Z
description = "Automated Testing and E2E Testing."
tags = [ "NPM", "Cypress" ]
title = "Cypress Automated Testing"
_template = "post_template"
+++

# Cypress Automated Testing

More info: [https://docs.cypress.io/guides/getting-started/writing-your-first-test#What-you-ll-learn](https://docs.cypress.io/guides/getting-started/writing-your-first-test#What-you-ll-learn "https://docs.cypress.io/guides/getting-started/writing-your-first-test#What-you-ll-learn")

Run a test with the desktop runner, paste in to the terminal:

    .\node_modules\.bin\cypress open

Run tests in the terminal only:

    npx cypress run

To make it easier I've updated the package.json:

      "scripts": {
        "test": "npx cypress run  -- --record --spec",
        "browsertest": "./node_modules/.bin/cypress open"
      }

the "test" is the CLI-only version (well not really but for simplicity), the "browsertest" opens the cypress dashboard in the browser.

First Test:

    describe("My First Test", () => {
      it("Visits NodeJS Starter", () => {
        cy.visit("https://nodestarter-prod.herokuapp.com/");
        cy.contains("Starter App");
      });
    });

How did I get here?

1. npm init
2. npm install cypress
3. in the integration folder, create a new file: <Name>.spec.js
4. Then use the CLI commands above to run the test ✅

Final test code:

    describe("Bad User Credentials", () => {
      it("Visits NodeJS Starter", () => {
        cy.visit("https://nodestarter-prod.herokuapp.com/");
        cy.contains("Starter App");
        cy.get("input[id='username']").type("Hello World");
        cy.get("input[id='password']").type("ABC123");
        cy.get("button[id='submit']").click();
        cy.contains("incorrect details");
      });
    });

The cy.get() conforms to the queryselector() format.

Coincidentally I also finally got access to GitHub copilot this week. It's pretty hit or miss with the suggestions, but for simply remembering syntax it is 5 ⭐'s . I wrote the above and honestly didn't look at the documentation to check the 'correct' syntax!
