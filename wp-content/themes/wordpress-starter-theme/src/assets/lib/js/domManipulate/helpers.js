export function whoIsThis (param) {
    if(typeof param === 'string') return 'selector';
    else if(param instanceof HTMLElement) return 'element';
    else if(param instanceof Node) return 'node';
    else return null;
}

export  function checkParam(param) {
    if(!whoIsThis(param)) {
        console.error('DomManipulate Error: this param is invalid use "string", "HTMLElement" or "Node"');
        return false
    } else return true;
}
