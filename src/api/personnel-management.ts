import request from "../plugins/axios";

export const getUsers = (params: unknown) => {
    // 注意此处的renturn
    return request({
        url: '/person/list',
        method: 'get',
        params
    })
}

// 获取人员基本信息
export const getUserBasicInfo = (params: unknown) => {
    return request({
        url: '/person/info',
        method: 'get',
        params
    })
}

// 获取人员历史数据
export const getUserInfo = (params: unknown) => {
    return request({
        url: '/person/info_list',
        method: 'get',
        params
    })
}