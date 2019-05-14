import DomObject from './domManipuldateObject';

class DomManipulateLibrary {
    constructor(config = {}) {
        Object.defineProperties(this, {
            _configs_: { value: config }
        })
    }

    ready(handler) {
        document.addEventListener("DOMContentLoaded", handler);
    }

    load(handler) {
        window.onload = function () { handler() }
    }

    $(param) { return new DomObject(param) }
}

export default DomManipulateLibrary;
