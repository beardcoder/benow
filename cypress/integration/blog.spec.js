import content from '../../src/content/homepage.json';

describe('Blog section', () => {
    it('test blog title', () => {
        cy.visit('/');
        cy.get('[data-cy=blog]')
            .find('h3')
            .should('contains.text', content.blog.title.replace(/<[^>]+>/g, ''));
    });

    it('has posts', () => {
        cy.get('[data-cy=blog]').find('[data-cy=post]');
    });

    it('test open post', () => {
        cy.get('[data-cy=post] a').first().click();
        cy.url().should('include', '/blog');
    });

    it('test post', () => {
        cy.get('[data-cy=title]').should('be.visible');
        cy.get('[data-cy=description]').should('be.visible');
        cy.get('[data-cy=content]').should('be.visible');
    });

    it('test post image', () => {
        cy.get('[data-cy=image]').should('be.visible');
    });

    it('test back button', () => {
        cy.get('[data-cy=back]').click();
        cy.url().should('include', '/#blog');
    });
});
