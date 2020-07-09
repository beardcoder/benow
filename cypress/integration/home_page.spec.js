import content from '../../src/content/homepage.json';

describe('The Home Page', () => {
    it('successfully loads', () => {
        cy.visit('/');
    });

    it('should be valid', () => {
        cy.visit('/');
        cy.htmlvalidate();
    });

    it('has title', () => {
        cy.get('#title').should('have.text', content.title.replace(/<[^>]+>/g, ''));
    });

    it('has subtitle', () => {
        cy.get('#subtitle').should('have.text', content.subtitle.replace(/<[^>]+>/g, ''));
    });

    it('has contact', () => {
        cy.get('#contact').should('contains.text', content.contact.replace(/<[^>]+>/g, ''));
    });
});
