/// <reference types = "cypress"/>

class createAppointmentPage {
  // page elements
  elements = {
    appNameTxt: () => cy.get('[data-testid="app-name"]'),
    titleTxt: () => cy.get('[data-testid="Title"]'),
    dynamicTitleTxt: () => cy.get('[data-testid="dynamic-title"]'),
    petNameTextBox: () => cy.get('[data-testid="pet"]'),
    ownerNameTextBox: () => cy.get('[data-testid="owner"]'),
    dateBox: () => cy.get('[data-testid="date"]'),
    timeBox: () => cy.get('[data-testid="time"]'),
    symtomsBox: () => cy.get('[data-testid="symptoms"]'),
    btnSubmit: () => cy.get('[data-testid="btn-submit"]'),
    deleteBtn: () => cy.get('[data-testid="btn-delete"]'),
    testAlert: () => cy.get('[data-testid="alert"]'),
    appointments: () => cy.get('[data-testid="appointment"]'),
  };

  //================ Page Methodsn ========================

  twoDigits (max) { 
    var num = Math.floor(Math.random() * max)
    if (num === 0) {
        num = '1' + 0
    } if (num > 0 && num < 10) {
        num = '0' + num
    }
  return num
  }

//This generate data for test
  generatetestData() {
    var today = new Date();
    var year = today.getFullYear();
    var month = this.twoDigits(13);
    var day = this.twoDigits(29);
    var hour = this.twoDigits(20);
    var minute = this.twoDigits(60);
    var returnedHour;
    var appReturnedTime;
    const petName = cy.faker.random.word();
    cy.readAndWriteFile("cypress/fixtures/testData.json", "petname", petName);
    const ownerName = cy.faker.name.firstName();
    cy.readAndWriteFile(
      "cypress/fixtures/testData.json",
      "ownername",
      ownerName
    );
    var appDate = year+'-'+month +'-'+day;
    cy.readAndWriteFile("cypress/fixtures/testData.json", "date", appDate);
    var appTime = hour +':'+minute
     cy.readAndWriteFile("cypress/fixtures/testData.json", "time", appTime);
    var appSymptoms = cy.faker.hacker.adjective();
    cy.readAndWriteFile(
      "cypress/fixtures/testData.json",
      "symptoms",
      appSymptoms
    );
  }

  //Method to input valid appointment details
  validAppointmentInput(petName, ownerName, date, time, symptoms) {
    cy.get(this.elements.petNameTextBox().type(petName));
    cy.get(this.elements.ownerNameTextBox().type(ownerName));
    cy.get(this.elements.dateBox().type(date, {force: true}));
    cy.get(this.elements.timeBox().type(time));
    cy.get(this.elements.symtomsBox().type(symptoms));
    cy.get(this.elements.btnSubmit().click());
  }

  //Method with blank Pet name
  blankPetNameInput(ownerName, date, time, symptoms) {
    cy.get(this.elements.ownerNameTextBox().type(ownerName));
    cy.get(this.elements.dateBox().type(date, {force: true}));
    cy.get(this.elements.timeBox().type(time));
    cy.get(this.elements.symtomsBox().type(symptoms));
    cy.get(this.elements.btnSubmit().click());
  }

  //Method to delete all appointments
  deleteAllAppointments() {
    cy.get('.one-half.column').find('[data-testid="btn-delete"]', { timeout: 10000 }).should('be.visible').each(function ($el, index, $list) {
        let tele = $el
        for (const ele of tele) {
        cy.get('[data-testid="btn-delete"]').first().should('be.visible').click();
      }
    })
    }

  //Method with blank owner's name
  blankOwnerNameInput(petName, date, time, symptoms) {
    cy.get(this.elements.petNameTextBox().type(petName));
    cy.get(this.elements.dateBox().type(date, {force: true}));
    cy.get(this.elements.timeBox().type(time));
    cy.get(this.elements.symtomsBox().type(symptoms));
    cy.get(this.elements.btnSubmit().click());
  }

  //Method with blank date
  blankDateInput(petName, ownerName, time, symptoms) {
    cy.get(this.elements.petNameTextBox().type(petName));
    cy.get(this.elements.ownerNameTextBox().type(ownerName));
    cy.get(this.elements.timeBox().type(time));
    cy.get(this.elements.symtomsBox().type(symptoms));
    cy.get(this.elements.btnSubmit().click());
  }

  //Method with blanck time
  blankTimeInput(petName, ownerName, date, symptoms) {
    cy.get(this.elements.petNameTextBox().type(petName));
    cy.get(this.elements.ownerNameTextBox().type(ownerName));
    cy.get(this.elements.dateBox().type(date, {force: true}));
    cy.get(this.elements.symtomsBox().type(symptoms));
    cy.get(this.elements.btnSubmit().click());
  }

  //Method with blanck symptoms
  blankSymptomsInput(petName, ownerName, date, time) {
    cy.get(this.elements.petNameTextBox().type(petName));
    cy.get(this.elements.ownerNameTextBox().type(ownerName));
    cy.get(this.elements.dateBox().type(date, {force: true}));
    cy.get(this.elements.timeBox().type(time));
    cy.get(this.elements.btnSubmit().click());
  }

  //Method to generate random AM/PM
  generateAmPm(str) {
    str = ['PM', 'AM'];
    var numb = Math.floor(Math.random() * str.length);
    return str[numb];
  } 
}
export default createAppointmentPage
