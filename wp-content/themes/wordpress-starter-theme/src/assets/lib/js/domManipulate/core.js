import * as Helpers from './helpers';

class DomManipulateCore {
    constructor(param, config) {
        if(!Helpers.checkParam(param)) return { message: 'DomManipulate called with Invalid param' };
        Object.defineProperties(this, {
            _param_: { value: param },
            _paramType_: { get() { return Helpers.whoIsThis(this._node_); } },
            _node_: { value: Helpers.getNode(param, Helpers.whoIsThis(param)) }
        })
    }

}

export default DomManipulateCore;
