export function h(tag, props, children) {
    return {tag, props, children};
}
export function mount(vnode, container) {
    const el = document.createElement(vnode.tag);
    vnode.el = el;

    // Handle props
    for (const key in vnode.props) {
        if (key.startsWith('on')) {
            const eventName = key.slice(2).toLowerCase();
            el.addEventListener(eventName, vnode.props[key])
        }
        el.setAttribute(key, vnode.props[key])
    }

    if (typeof vnode.children === 'string') {
        el.textContent = vnode.children;
    } else if (Array.isArray(vnode.children)) {
        vnode.children.forEach(child => mount(child, el));
    } else {
        mount(vnode.children, el);
    }
    container.appendChild(el);
}
export function unmount(vnode) {
    console.log(vnode)
    console.log(vnode.el.parentNode)
    vnode.el.parentNode.removeChild(vnode.el);
}
export function patch(vnode1, vnode2) {
    if (typeof vnode2.children === 'string') {
        console.log(222)
        vnode1.el.textContent = vnode2.children;
    } else {
        console.log(777)
        for (let i = 0; i < vnode2.children.length; i++) {
            patch(vnode1.children[i], vnode2.children[i]);
        }
    }
}