// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('Stel je persoonlijke kaart samen')
  })
})

describe('Switching the language', () => {
  it('works', () => {
    cy.visit('/')
    cy.get('input#English + label').click()
    cy.contains('Configure your personal postcard')
  })
})

describe('You can add a postcard', () => {
  it('works', () => {
    cy.visit('/')
    cy.get('#add-cart button').click()
    cy.get('.single-product').should('have.length', 2)
  })
})

describe('You can remove a postcard', () => {
  it('works', () => {
    cy.visit('/')
    cy.get('#add-cart button').click()
    cy.get('#add-cart button').click()
    cy.get('.single-product:last-child .remove-product-button').click()
    cy.get('.single-product').should('have.length', 2)
  })
})

describe('Calculated card price is correct', () => {
  it('works', () => {
    cy.visit('/')
    cy.get('.single-product #size').select('a5')
    cy.get('.single-product #amount').type('{selectall}{backspace}20')
    cy.get('.single-product [type="radio"][value="extra"] + label').click()
    cy.get('.single-product #headline').type('Hello world')
    cy.get('.single-product #body').type('Lorem ipsum dolor sit amet')

    cy.contains('#price', 'Prijs: € 30.25')
  })
})

describe('Reset product works', () => {
  it('works', () => {
    cy.visit('/')
    cy.get('.single-product #size').select('a5')
    cy.get('.single-product #amount').type('{selectall}{backspace}20')
    cy.get('.single-product [type="radio"][value="extra"] + label').click()
    cy.get('.single-product #headline').type('Hello world')
    cy.get('.single-product #body').type('Lorem ipsum dolor sit amet')

    // reset
    cy.get('.single-product button').contains('Begin opnieuw').click()

    cy.get('.single-product #headline').should('be.empty')
    cy.get('.single-product #body').should('be.empty')
    cy.get('.single-product #size option:selected').should('have.text', 'A4')
  })
})

describe('Proceeding to checkout shows a modal', () => {
  it('works', () => {
    cy.visit('/')
    cy.get('.single-product #size').select('a5')
    cy.get('.single-product #amount').type('{selectall}{backspace}20')
    cy.get('.single-product [type="radio"][value="extra"] + label').click()
    cy.get('.single-product #headline').type('Hello world')
    cy.get('.single-product #body').type('Lorem ipsum dolor sit amet')

    // proceed to checkout
    cy.get('footer button').contains('afrekenen').click()
    cy.contains('In een echte app zou je nu naar de winkelwagen gaan om af te rekenen. Vandaag eindigt het hier!')
  })
})
