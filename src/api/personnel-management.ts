import request from "../plugins/axios";

export const getUsers = (params: any) => {
    request({
        url: '/person/list',
        method: 'get',
        params
    })
}