import Mapper from "../api/mapper";

const Authorization = {
    ID: "id",
    Username: "username",
    Password: "password",
    Status: "status"
}

export function AuthorizationSchema(node = "", method) {
    return Mapper.mapSchema(node, Authorization, method);
}