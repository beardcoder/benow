import Rellax from 'rellax';

function initRellax() {
    if (!(this instanceof Rellax)) {
        return new Rellax('.rellax');
    }
}

initRellax();
