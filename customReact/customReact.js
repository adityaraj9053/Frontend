/** We select the DOM container with id="root" and store it in mainContainer.
We define a React-like element object with a type, props, and children.
We create a DOM element using document.createElement, set its innerHTML to the children, and loop through its props to set all attributes dynamically.
Finally, we append the DOM element into the container.
 */

function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    /** Here is a problem. if attribute have so many properties then what we will do? */
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);

    for(const prop in reactElement.props){
        if(prop == 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);