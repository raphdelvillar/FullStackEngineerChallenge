import { EmployeeListViewModel, EmployeeViewModel } from "./employee";
import { ReviewListViewModel, ReviewViewModel } from "./review";

export default {
    Employee(type, url) {
        switch (type) {
            case "list":
                return new EmployeeListViewModel(url);
            default:
                return new EmployeeViewModel(url);
        }
    },
    Review(type, url) {
        switch (type) {
            case "list":
                return new ReviewListViewModel(url);
            default:
                return new ReviewViewModel(url);
        }
    }
}
