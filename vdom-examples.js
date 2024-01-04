import {h, unmount, patch} from "./vue-vdom.js";

export const vdom1 = h(
    'h1',
    {
        class: 'text-orange-600 text-3x1 font-bold'
    },
    'Vue.js Amsterdam'
);
export const vdom2 = h(
    'button',
    {
        class: 'bg-gray-200 rounded',
        onclick: () => alert('Hello Baku')
    },
    'Click here nice man!'
);
export const vdom3 = h(
    'div',
    {
        class: 'bg-gray-800 rounded-full p-6 text-white'
    },
    h('h1', {class: 'text-6x1'}, 'Oh yeah')
);

export const vdom4 = h(
  'div',
    {
        class: 'bg-gray-800 rounded p-4'
    },
    [
        h('h1', {class: 'text-white text-2xl'}, 'Yummy foods'),
        h('ol', {class: 'list-decimal text-white ml-4'}, [
            h('li', null, 'html'),
            h('li', null, 'css'),
            h('li', null, 'js'),
            h('li', null, 'vue'),
        ])
    ]
);

// VDOM 5 -------------------------------------------
const ducks = h('span', {class: 'text-3x1'},  'htmlhtmlhtml');
const monkeys = h('span', {class: 'text-3x1'},  'monkeymonkeymonkey');
const goats = h('span', {class: 'text-3x1'},  'goatgoatgoat');
export const vdom5 = h(
    'div',
    {
        class: 'text-center rounded p-4'
    },
    [
        h(
            'h1',
            {class: 'text-2xl font-bold'},
            'I do not have time for monkey business'
        ),
        h(
            'div', null, [ducks, monkeys, goats]
        ),
        h(
            'button',
            {
                class: 'text-3xl bg-gray-200 p-2 rounded mt-4',
                onclick: () => unmount(monkeys)
            },
            'remove monkeys'
        )
    ]
);

export const vdom6 = h(
    'div',
    {
        class: 'flex flex-col items-center'
    },
    [
        h('h1', { class: 'font-bold' }, 'it is not a bug...'),
        h('p', { class: 'text-5xl my-4' }, 'qurtcuq bug :)'),
        h(
            'button',
            {
            class: 'bg-black text-white p-2 rounded hover:bg-orange-500',
            onClick: () => patch(vdom6, vdom6_patch)
        },
            'it is not a bug...'
        )
    ]
);

export const vdom6_patch = h(
    'div',
    {
        class: 'flex flex-col items-center'
    },
    [
        h('h1', {class: 'font-bold'}, "... it is a features!"),
        h('div', {class: 'text-5x1'}, "perfecttt"),
    ]
);