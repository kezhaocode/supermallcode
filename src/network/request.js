import axios from "axios";

export function request(config) {
    //1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: 5000
    })
    //2.拦截器
    //比如config一些不符合服务器要求
    //比如每次请求都希望在界面显示一个请求图标。必须携带一些特殊的信息
    //比如登录
    //1.请求拦截 成功失败
    // instance.interceptors.request.use(config=>{
    //     // console.log(config)
    //     return config
    // },error => {
    //     // console.log(err)
    // })
    // 响应拦截  成功失败
    instance.interceptors.response.use(res => {
        // console.log(res)
        return res.data
    }, err => {
        console.log(err)
    })
    //3.发送真正请求
    return instance(config)
}