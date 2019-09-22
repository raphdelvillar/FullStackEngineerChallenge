import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import PerformanceReviews from "./root.component.js";

function domElementGetter() {
    return document.getElementById("performance-reviews");
}

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: PerformanceReviews,
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