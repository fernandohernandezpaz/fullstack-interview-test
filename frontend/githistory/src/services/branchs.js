import request from "../utils/request";

export function obtenerBranchs(query) {
    return request({
        url: '/branchs/',
        params: query
    });
}