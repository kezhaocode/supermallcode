import {request} from "@/network/request";

export function getHomedata() {
    return request({
        url: '/home/multidata'
    })
}
export function gethomegoods(type,page){
    return request({
        url:'/home/data?type=sell&page=1',
        param:{
            type,page
        }
    })
}