// @ts-ignore
import * as inViewport from 'in-viewport';

let elements = document.querySelectorAll('[data-in-viewport]');

for (let element of <any>elements) {
    inViewport(element, { debounce: 50 }, () => {
        element.classList.add('in-viewport');
    });
}
