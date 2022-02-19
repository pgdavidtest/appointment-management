///<reference types = "cypress"/>
import createAppointmentPage from "../../../cypress/pageObject/createAppointments";
const myAppointmentPage = new createAppointmentPage();
describe("test", function () {
  before(function () {
    myAppointmentPage.generatetestData();
  });
  beforeEach(function () {
    cy.readFile("cypress/fixtures/testData.json").then(function (user) {
      this.pet = user.petname;
      this.owner = user.ownername;
      this.date = user.date;
      this.time = user.time;
      this.symptoms = user.symptoms;
      this.returnedTime = user.returnedTime
      cy.visit("http://localhost:3000/");
    });
  });   
it("Validate App Name", function () {
    expect(myAppointmentPage.elements.appNameTxt().should('have.text', 'Appointment Management'));   
});   
it("Validate Valid Input", function () {
    myAppointmentPage.validAppointmentInput(this.pet, this.owner, this.date, this.time, this.symptoms );
    expect(cy.get('[data-testid="appointment"]').contains('Pet').find('span').should('have.text', this.pet));
    expect(cy.get('[data-testid="appointment"]').contains('Owner').find('span').should('have.text', this.owner));
    expect(cy.get('[data-testid="appointment"]').contains('Date').find('span').should('have.text', this.date));
    expect(cy.get('[data-testid="appointment"]').contains('Time').find('span').should('have.text', this.time));
    expect(cy.get('[data-testid="appointment"]').contains('Symptoms').find('span').should('have.text', this.symptoms));
    expect(myAppointmentPage.elements.dynamicTitleTxt().should('have.text', 'Manage your appointments'));       
});    
it("Validate Dynamic Title", function () {
    expect(myAppointmentPage.elements.dynamicTitleTxt().should('have.text', 'There are no appointments'));   
});
it("Validate Blank PetName Input", function () {
    myAppointmentPage.blankPetNameInput(this.owner, this.date, this.time, this.symptoms);
    expect(myAppointmentPage.elements.testAlert().should('have.text', 'All fields are required'));
});    
it("Validate Multiple Appointments", function () {
    myAppointmentPage.validAppointmentInput(this.pet, this.owner, this.date, this.time, this.symptoms );
    myAppointmentPage.validAppointmentInput(this.pet, this.owner, this.date, this.time, this.symptoms );
    expect(cy.get('[data-testid="appointment"]').should('have.length', 2))  
});   
it("Validates Delete Feature", function () {
    myAppointmentPage.validAppointmentInput(this.pet, this.owner, this.date, this.time, this.symptoms );
    myAppointmentPage.validAppointmentInput(this.pet, this.owner, this.date, this.time, this.symptoms );
    myAppointmentPage.deleteAllAppointments()
    expect(myAppointmentPage.elements.dynamicTitleTxt().should('have.text', 'There are no appointments'));
});
    


it("Validate App Name", function () {
      expect(myAppointmentPage.elements.appNameTxt().should('have.text', 'Appointment Management'));   
  });

  it("Validate Page Title", function () {
      expect(myAppointmentPage.elements.titleTxt().should('have.text', 'Create Appointment'));   
  }); 

  it("Validate Blank Owner Name", function () {
      myAppointmentPage.blankOwnerNameInput(this.pet, this.date, this.time, this.symptoms);
      expect(myAppointmentPage.elements.testAlert().should('have.text', 'All fields are required'));
  });

  it("Validate Blank Date", function () {
      myAppointmentPage.blankDateInput(this.pet, this.owner, this.time, this.symptoms);
      expect(myAppointmentPage.elements.testAlert().should('have.text', 'All fields are required'));
  });

  it("Validate Blank Time", function () {
      myAppointmentPage.blankTimeInput(this.pet, this.owner, this.date, this.symptoms);
      expect(myAppointmentPage.elements.testAlert().should('have.text', 'All fields are required'));
  });

  it("Validate Blank Symptoms", function () {
      myAppointmentPage.blankSymptomsInput(this.pet, this.owner, this.date, this.time);
      expect(myAppointmentPage.elements.testAlert().should('have.text', 'All fields are required'));
  });

 it("Validate Dynamic Title With Successful Input", function () {
      myAppointmentPage.validAppointmentInput(this.pet, this.owner, this.date, this.time, this.symptoms );
      expect(myAppointmentPage.elements.dynamicTitleTxt().should('have.text', 'Manage your appointments')); 
  });  



  
})
