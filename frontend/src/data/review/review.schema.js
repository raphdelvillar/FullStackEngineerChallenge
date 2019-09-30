import Mapper from "../api/mapper";

const Review = {
    ID: "id",
    EmployeeID: "employee_id",
    ReviewedByID: "reviewed_by_id",
    Performances: "performances",
    Competencies: "competencies",
    Rating: "rating",
    Comment: "comment",
}

const Performance = {
    ID: "id",
    ReviewID: "review_id",
    Title: "title",
    Description: "description",
    Rating: "rating"
}

const Competency = {
    ID: "id",
    ReviewID: "review_id",
    Title: "title",
    Description: "description",
    Rating: "rating"
}

export function ReviewSchema(node = "", method) {
    let review = Mapper.mapSchema(node, Review, method);

    switch (method) {
        case "unmap":
            review.performances = iteratee => {
                return Mapper.mapNodeArray(PerformanceSchema, iteratee, node, "Performances", method);
            }
            review.competencies = iteratee => {
                return Mapper.mapNodeArray(CompetencySchema, iteratee, node, "Competencies", method);
            }
            break;
        default:
            review.Performances = iteratee => {
                return Mapper.mapNodeArray(PerformanceSchema, iteratee, node, "performances", method);
            }
            review.Competencies = iteratee => {
                return Mapper.mapNodeArray(CompetencySchema, iteratee, node, "competencies", method);
            }
    }

    return review;
}

export function PerformanceSchema(node = "", method) {
    return Mapper.mapSchema(node, Performance, method);
}

export function CompetencySchema(node = "", method) {
    return Mapper.mapSchema(node, Competency, method);
}