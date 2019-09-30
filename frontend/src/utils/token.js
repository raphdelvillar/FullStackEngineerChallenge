import jwt_decode from 'jwt-decode';

export function decodeToken() {
    let token = localStorage.getItem("access_token");
    return jwt_decode(token);
}