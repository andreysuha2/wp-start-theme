export function whoIsThis (param) {
    if(typeof param === 'string') return 'selector';
    else if(param instanceof HTMLElement) return 'element';
    else if(param instanceof Node) return 'node';
    else if(param instanceof NodeList) return 'nodeList';
    else return null;
}

export  function checkParam(param) {
    if(!whoIsThis(param)) {
        console.error('DomManipulate Error: this param is invalid use "string", "HTMLElement" or "Node"');
        return false
    } else return true;
}

export function getNode(param, type) {
    if(type === 'node' || type === 'element') return param;
    else return document.querySelectorAll(param);
}

export function handleMethod(nodes, type, handler) {
    if(type === "element") return handler(nodes);
    else if(type === "nodeList") nodes.forEach((node) => handler(node))
}
