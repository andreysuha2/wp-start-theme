import * as Helpers from './helpers';
import Core from './core';

class DomManipulateObject extends Core {
    constructor(param, config = {}) {
        super(param, config);
    }

    first() {
        if(this._paramType_ === 'nodeList') return new DomManipulateObject(this._node_[0]);
        else return this;
    }
}

export default DomManipulateObject;
