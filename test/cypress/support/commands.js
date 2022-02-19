
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Click Command
/* Cypress.Commands.add('clickButton', (element) => { 
    cy.get(element).click()
})

//Enter Text Command
Cypress.Commands.add('enterText', (element, text) => { 
    cy.get(element).type(text)
}) */

//ReadAndWriteToFile
 Cypress.Commands.add('readAndWriteFile', (fileName, keyName, value) => {
    cy.readFile(fileName).then((data) => {
        data[keyName] = value;
        cy.writeFile(fileName, data)
    });
 });


 
