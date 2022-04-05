import request from "../plugins/axios";

export const getUsers = (params: any) => {
    request({
        url: '',
        method: 'get',
        params
    })
}