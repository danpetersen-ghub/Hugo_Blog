+++
date = 2022-04-20T23:00:00Z
description = ""
draft = true
title = "cypress automated tests"

+++
# cypress testing

More info: [https://docs.cypress.io/guides/getting-started/writing-your-first-test#What-you-ll-learn](https://docs.cypress.io/guides/getting-started/writing-your-first-test#What-you-ll-learn "https://docs.cypress.io/guides/getting-started/writing-your-first-test#What-you-ll-learn")

Run a test with the desktop runner, paste in to the terminal:

    .\node_modules\.bin\cypress open

Run tests in the terminal only:

    npx cypress run

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

A