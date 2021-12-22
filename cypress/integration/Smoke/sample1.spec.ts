describe('Sample Cypress setup', () => {
  it('should go to Google using a command', () => {
    cy.google();
  });

  it('should go to Google directly', () => {
    cy.visit('https://google.com');
    cy.percySnapshot();
    cy.get('input[name="q"]').type('BrowserStack')
    cy.contains('Google Search').click()
  })
});
