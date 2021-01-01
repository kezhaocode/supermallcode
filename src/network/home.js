import {request} from "@/network/request";

export function getHomedata() {
    return request({
        url: '/home/multidata'
    })
}
export function gethomegoods(type,page){
    return request({
        url:'/home/data?type=pop&page=1',

    })
}
export function gethomegoods1(type,page){
    return request({
        url:'/home/data?type=new&page=1',

    })
}
export function gethomegoods2(type,page){
    return request({
        url:'/home/data?type=sell&page=1',

    })
}