import 'antd/dist/antd.css';
import { registerApplication, start } from "single-spa";

function onCurrentRoute (path) {
  if (location.pathname.startsWith(path)) return true;
  return false;
}

registerApplication(
    "appbar",
    () => import("./src/appbar/appbar.app.js"),
    () => true
);

registerApplication(
    "employees",
    () => import("./src/employees/employees.app.js"),
    () => onCurrentRoute("/employees")
);

registerApplication(
    "my-reviews",
    () => import("./src/my-reviews/my-reviews.app.js"),
    () => onCurrentRoute("/my-reviews")
);

registerApplication(
    "performance-reviews",
    () => import("./src/performance-reviews/performance-reviews.app.js"),
    () => onCurrentRoute("/performance-reviews")
);

registerApplication(
    "footer",
    () => import("./src/footer/footer.app.js"),
    () => true
);

start();