describe('Browser Actions', () => {
    it('should load correct url', () => {
        cy.log('I am under the first test')
        cy.visit('http://example.com', { timeout: 10000 })
    })
    it('should check correct url', () => {
        // below is an assertion which will vgrab the app's url and check wjethere it contains 'example.com'
        cy.url().should('include', 'example.com')
    })
    it('should contain h1 html tag', () => {
        cy.get('h1').should('be.visible')
    })
    
    it('should wait for 3 seconds', () => {
        cy.wait(3000)
    })
})