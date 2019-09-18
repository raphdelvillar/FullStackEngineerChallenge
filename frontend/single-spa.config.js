import 'antd/dist/antd.css';
import { registerApplication, start } from "single-spa";


registerApplication(
    "appbar",
    () => import("./src/appbar/appbar.app.js"),
    () => true
);

registerApplication(
    "employees",
    () => import("./src/employees/employees.app.js"),
    () => true
)

registerApplication(
    "footer",
    () => import("./src/footer/footer.app.js"),
    () => true
);

start();