import * as Helpers from './helpers';
import Core from './core';

class DomManipulateObject extends Core {
    constructor(param, config = {}) {
        super(param, config);
    }

    /**
     * @desc get first element of selected NodeList or current selected element
     * @returns {DomManipulateObject|null}
     */
    first() {
        if(this._paramType_ === 'nodeList') return (this._node_[0]) ? new DomManipulateObject(this._node_[0]) : null;
        else return this;
    }

    // class methods
    addClass(list) {
        return this.callHandler(function(node) {
            node.classList.add(list);
        });
    }

    removeClass(list) {
        return this.callHandler(function (node) {
            node.classList.remove(list);
        });
    }

    toggleClass(list, event) {
        return this.callHandler(function (node) {
            node.classList.toggle(list, event);
        });
    }

    hasClass(className, behavior = 'some') {
        if(['every', 'some'].indexOf(behavior) === -1) behavior = 'some';
        return this.callCheckHandler(behavior, function (node) {
            return node.classList.contains(className);
        });
    }

    //visibility
    show(display = "block") {
        return this.callHandler(function (node) {
            node.style.display = display
        });
    }

    hide() {
        return this._callHandler_(function (node) {
            node.style.display = 'none';
        })
    }

    toggleShow(display = 'block') {
        return this.callHandler(function (node) {
            node.style.display = (window.getComputedStyle(node).display === "none") ? display : "none";
        })
    }

    //style
    css(styles) {
        this.callHandler(function (node) {
           Object.keys(styles).forEach((name) => node.style[name] = styles[name]);
        });
    }
}
export default DomManipulateObject;
