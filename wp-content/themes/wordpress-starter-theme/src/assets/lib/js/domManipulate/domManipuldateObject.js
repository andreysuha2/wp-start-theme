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
    addClass(classes) {
        Helpers.handleMethod(this.node, this._paramType_, function(node) {
            node.classList.add(classes);
        });
        return this;
    }

    removeClass(classes) {
        Helpers.handleMethod(this.node, this._paramType_, function (node) {
            node.classList.remove(classes);
        });
        return this;
    }

    toggleClass(classes, event) {
        Helpers.handleMethod(this.node, this._paramType_, function (node) {
            node.classList.toggle(classes, event);
        })
    }
}

export default DomManipulateObject;
