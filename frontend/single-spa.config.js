import 'antd/dist/antd.css';
import './style.css';
import { registerApplication, start } from "single-spa";

function onCurrentRoute(path) {
    if (location.pathname.startsWith(path)) return true;
    return false;
}

function currentlyLoggedIn() {
    // let token = localStorage.getItem("access_token");
    // if (token != null) {
    //     document.getElementById("content").style.visibility = "visible";
    //     return true;
    // }
    // document.getElementById("content").style.visibility = "hidden";
    // return false;
    return true;
}

// registerApplication(
//     "authorization",
//     () => import("./src/authorization/authorization.app.js"),
//     () => !currentlyLoggedIn()
// )

registerApplication(
    "appbar",
    () => import("./src/appbar/appbar.app.js"),
    () => currentlyLoggedIn()
);

registerApplication(
    "employees",
    () => import("./src/employees/employees.app.js"),
    () => onCurrentRoute("/employees") && currentlyLoggedIn()
);

registerApplication(
    "my-reviews",
    () => import("./src/my-reviews/my-reviews.app.js"),
    () => onCurrentRoute("/my-reviews") && currentlyLoggedIn()
);

registerApplication(
    "performance-reviews",
    () => import("./src/performance-reviews/performance-reviews.app.js"),
    () => onCurrentRoute("/performance-reviews") && currentlyLoggedIn()
);

registerApplication(
    "footer",
    () => import("./src/footer/footer.app.js"),
    () => currentlyLoggedIn()
);

start();