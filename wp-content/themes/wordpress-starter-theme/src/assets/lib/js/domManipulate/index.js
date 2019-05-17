import DomObject from './domManipuldateObject';

class DomManipulateLibrary {
    constructor(config = {}) {
        Object.defineProperties(this, {
            _configs_: { value: config }
        });
    }

    events(eventsString, handler) {
        let events = eventsString.split(' ');
        events.forEach((event) => {
            if(typeof this[event] === 'function') this[event](handler);
        });
    }

    ready(handler) {
        document.addEventListener("DOMContentLoaded", handler);
    }

    load(handler) {
        window.onload = function () { handler(); };
    }

    resize(handler) {
        window.addEventListener("resize", function () {
            handler();
        });
    }

    $(param) { return new DomObject(param); }
}

export default DomManipulateLibrary;
