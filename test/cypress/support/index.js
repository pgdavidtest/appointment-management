// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

//import faker from 'faker'
//import * as faker from 'faker';
// Import commands.js using ES2015 syntax:
//import { fake } from 'faker/locale/es_MX'

import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
/// <reference types="cypress" />
///<reference types="../support" />

cy.faker = require("faker/locale/en_US")
