import forEach from 'lodash/forEach'

// @ts-ignore
import * as inViewport from 'in-viewport';

let elements = document.querySelectorAll('[data-in-viewport]');

forEach(elements, (element) => {
    inViewport(element, {debounce: 50}, () => {
        element.classList.add('in-viewport')
    })
});

