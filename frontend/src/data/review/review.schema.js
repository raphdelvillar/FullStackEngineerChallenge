import Mapper from "../api/mapper";

const Review = {
    ID: "id",
    EmployeeID: "employee_id",
    Rating: "rating",
    Comment: "comment",
}

export function ReviewSchema(node = "", method) {
   return Mapper.mapSchema(node, Review, method);
}