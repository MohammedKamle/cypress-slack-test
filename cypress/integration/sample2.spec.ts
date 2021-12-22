describe('screenshots', ()=>{
    it('should take full page screenshot', ()=>{
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.screenshot({capture: "fullPage"});
    })
    it('should take screenshot of header and populate elelment', ()=>{
        cy.get('header').screenshot();
        //cy.get('#populate').screenshot();
    })
})