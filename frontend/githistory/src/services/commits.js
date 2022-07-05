import request from "../utils/request";

export function obtenerCommits(query) {
    return request({
        url: '/commits/',
        params: query
    });
}

export function obtenerCommit(hash) {
    return request({
        url: `/commits/${hash}/`,
    });
}