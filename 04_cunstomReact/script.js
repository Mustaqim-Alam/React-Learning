const mainContainer = document.getElementById("root");

const reactElm = {
  type: "a",
  props: {
    href: "https://Google.com",
    target: "_blank",
    // placeholder: "Hello, world"
  },
  children: "click me to visit Google",
};

function coustomREnder(reactElement, container) {
  //Method 1
  //   const domElement = document.createElement(reactElement.type);
  //   domElement.innerHTML = reactElement.children;
  //   domElement.setAttribute("href", reactElement.props.href);
  //   domElement.setAttribute("target", reactElement.props.target);
  //   container.appendChild(domElement);

  //method 2
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (let prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

coustomREnder(reactElm, mainContainer);
