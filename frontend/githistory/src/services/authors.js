import request from "../utils/request";

export function obtenerAuthors() {
    return request({
        url: '/authors/'
    });
}