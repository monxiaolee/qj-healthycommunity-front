// import { ElMessage } from "element-plus";
import axios, { AxiosResponse } from "axios";
// import qs from "qs";

const request = axios.create({
    baseURL: '',
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
        if (res.code !== 200) {
            console.log("接口请求出错")
            // ElMessage(res.message || 'Error')
        } else {
            return reponse.data;
        }
    },
    (error) => {
        console.log("接口请求出错")
        // ElMessage(error.message || 'Error')
        return Promise.reject(error)
    }
)

export default request;


