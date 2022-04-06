import request from "../plugins/axios";

export const getUsers = (params: any) => {
    request({
        url: '/devApi',
        method: 'get',
        params
    })
}