import request from "../plugins/axios";

export const getUsers = (params: unknown) => {
    // 注意此处的renturn
    return request({
        url: '/person/list',
        method: 'get',
        params
    })
}