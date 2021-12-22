// local test
describe('Local Testing', () => {
    it('should lload local host', () => {
        cy.visit('http://localhost:8000/', { timeout: 10000 });
        cy.screenshot({ capture: "fullPage" });
        cy.title().should('eq', 'Local Server')
    })
})