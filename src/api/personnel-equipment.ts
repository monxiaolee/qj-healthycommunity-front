import request from "../plugins/axios";

export const getPersonEquipment = (params: unknown) => {
    // 注意此处的renturn
    return request({
        url: '/equipment_inspection/list',
        method: 'get',
        params
    })
}