import Mapper from "../api/mapper";

import { ReviewSchema } from "../review/review.schema";

const Employee = {
    ID: "id",
    FullName: "full_name",
    Designation: "designation",
    Email: "email",
    Gender: "gender",
    JoinDate: "join_date",
    Reviews: "reviews"
}

export function EmployeeSchema(node = "", method) {
    let employee = Mapper.mapSchema(node, Employee, method);

    switch (method) {
        case "unmap":
            employee.reviews = iteratee => {
                return Mapper.mapNodeArray(ReviewSchema, iteratee, node, "Reviews", method);
            }
            break;
        default:
            employee.Reviews = iteratee => {
                return Mapper.mapNodeArray(ReviewSchema, iteratee, node, "reviews", method)
            }
    }

    return employee;
}
