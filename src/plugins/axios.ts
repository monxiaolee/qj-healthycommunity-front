// import { ElMessage } from "element-plus";
import axios, { AxiosResponse } from 'axios';
// import qs from "qs";

const request = axios.create({
    baseURL: '/fz',
    timeout: 10000
    // transformRequest: [function(data){
    //     const d = qs.stringfy(data)
    //     return d;
    // }]
})

// Request interceptors 请求拦截器 做登录状态的拦截
// request.interceptors.request.use(
//     (config) => {

//     }
// )

// Reponse interceptors
request.interceptors.response.use(
    (reponse) => {
        // code == 200: success
        const res = reponse.data;
        if (res.code !== 10200) {
            console.log("接口请求出错")
            // ElMessage(res.message || 'Error')
        } else {
            return res;
        }
    },
    (error) => {
        console.log("接口请求出错")
        // ElMessage(error.message || 'Error')
        return Promise.reject(error)
    }
)

export interface PromiseBaseName {
    data: string | Array<any> | number | Object | undefined | null,
    error_code: number,
    message?: string
}

export interface PromiseLoginName extends PromiseBaseName {
    token: string
}

export type ResponseName = AxiosResponse<PromiseBaseName> | AxiosResponse<PromiseLoginName>

export default request;


