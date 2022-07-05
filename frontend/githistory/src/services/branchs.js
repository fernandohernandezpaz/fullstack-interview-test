import request from "../utils/request";

export function obtenerBranchs(query) {
    return request({
        url: '/branchs/',
        params: query
    });
}

export function obtenerBranch(name) {
    return request({
        url: `/branchs/${name}/`,
    });
}