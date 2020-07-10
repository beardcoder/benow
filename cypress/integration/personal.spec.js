import content from '../../src/content/homepage.json';

describe('Personal section', () => {
    it('successfully loads', () => {
        cy.visit('/');
    });

    it('personal title', () => {
        cy.get('[data-cy=personal]')
            .find('h3')
            .should('contains.text', content.personal.title.replace(/<[^>]+>/g, ''));
    });

    it('personal description', () => {
        cy.get('[data-cy=personal]').should(
            'contains.text',
            content.personal.description.replace(/<[^>]+>/g, '')
        );
    });

    it('personal text', () => {
        cy.get('[data-cy=personal]').should(
            'contains.text',
            content.personal.text.replace(/<[^>]+>/g, '')
        );
    });

    it('personal skills', () => {
        content.personal.skills.forEach(skill => {
            cy.get('[data-cy=personal]').should(
                'contains.text',
                skill.title.replace(/<[^>]+>/g, '')
            );
        });
    });
});
