import * as Helpers from './helpers';

class DomManipulateCore {
    constructor(param) {
        if(!Helpers.checkParam(param)) return { message: 'DomManipulate called with Invalid param' };
        Object.defineProperties(this, {
            _param_: { value: param },
            _paramType_: { get() { return Helpers.whoIsThis(this._node_); } },
            _node_: { value: Helpers.getNode(param, Helpers.whoIsThis(param)) }
        });
    }

    // check is element exist
    get is() {
        return this._node_.length !== 0;
    }

    // return NodeList or HTMLElement Object
    get node() {
        return this._node_;
    }

    callHandler(handler) {
        Helpers.handleMethod(this.node, this._paramType_, handler);
        return this;
    }

    callCheckHandler(behavior = "some", handler) {
        return Helpers.handleCheckMethod(this.node, this._paramType_, behavior, handler);
    }
}

export default DomManipulateCore;
