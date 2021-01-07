import{request} from "./request";



// export function getDetail(iid){
//     return request({
//         url: '/detail/?iid=1jw0sr2',
//     })
// }
export function getDetail(iid){
    return request({
        url: '/detail',
        params:{
            iid
        }
    })
}