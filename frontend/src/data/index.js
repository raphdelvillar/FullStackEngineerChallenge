import { AuthorizationViewModel } from "./authorization";
import { EmployeeListViewModel, EmployeeViewModel } from "./employee";
import { ReviewListViewModel, ReviewViewModel } from "./review";
import { DashboardViewModel } from "./dashboard";

export default {
  Dashboard(type, url) {
    switch (type) {
      case "list":
        return null;
      default:
        return new DashboardViewModel(url);
    }
  },
  Authorization(type, url) {
    switch (type) {
      case "list":
        return null;
      default:
        return new AuthorizationViewModel(url);
    }
  },
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
};
