import Core from './core';

class DomManipulateObject extends Core {
    constructor(param) {
        super(param);
    }

    /**
     * @desc get first element of selected NodeList or current selected element
     * @returns {DomManipulateObject|null}
     */
    first() {
        if(this._paramType_ === 'nodeList') return this._node_[0] ? new DomManipulateObject(this._node_[0]) : null;
        return this;
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
        if([ 'every', 'some' ].indexOf(behavior) === -1) behavior = 'some';
        return this.callCheckHandler(behavior, function (node) {
            return node.classList.contains(className);
        });
    }

    //visibility
    show(display = "block") {
        return this.callHandler(function (node) {
            node.style.display = display;
        });
    }

    hide() {
        return this._callHandler_(function (node) {
            node.style.display = 'none';
        });
    }

    toggleShow(display = 'block') {
        return this.callHandler(function (node) {
            node.style.display = window.getComputedStyle(node).display === "none" ? display : "none";
        });
    }

    //style
    css(styles) {
        this.callHandler(function (node) {
           Object.keys(styles).forEach((name) => { node.style[name] = styles[name]; });
        });
    }

    // attributes
    attrGet(name, fromNode = null) {
        let attr = null;
        if(this._paramType_ === "element") attr = this.node.getAttribute(name);
        else if(!fromNode) attr = this.node[0].getAttribute(name);
        else {
            attr = [];
            if(fromNode === 'all') this.node.forEach((node) => attr.push(node.getAttribute(name)));
            else this.fromNode.forEach((index) => attr.push(this.node[index].getAttribute(name)));
        }
        return attr;
    }

    attrSet(name, value) {
        return this.callHandler(function (node) {
            node.setAttribute(name, value);
        });
    }

    attrDel(name) {
        return this.callHandler(function (node) {
            node.removeAttribute(name);
        });
    }

    //dataset
    dataGet(name, fromNode = null) {
        return this.attrGet(`data-${name}`, fromNode);
    }

    dateSet(name, value) {
        return this.attrSet(`data-${name}`, value);
    }

    dataDel(name) {
        return this.attrDel(`data-${name}`);
    }
}
export default DomManipulateObject;
