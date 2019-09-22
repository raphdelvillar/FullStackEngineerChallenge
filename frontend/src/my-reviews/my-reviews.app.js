import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import MyReviews from "./root.component.js";

function domElementGetter() {
    return document.getElementById("my-reviews");
}

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: MyReviews,
    domElementGetter,
})

export const bootstrap = [
    reactLifecycles.bootstrap,
];

export const mount = [
    reactLifecycles.mount,
];

export const unmount = [
    reactLifecycles.unmount,
];