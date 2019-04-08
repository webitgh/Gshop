/**
 * ajax请求模块
 * 返回值：promise
 */
import axios from 'axios'
export default function ajax(url,data={},type='GET'){
    return new Promise(function (resolve,reject){
        let promise = null;
        if(type === 'GET'){
            let dataStr = '';
            //拼接
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if(dataStr !== ''){
                dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'));
                url = url + '?' + dataStr
            }
            // 发送get
            promise = axios.get(url);
        }else {
            // 发送post
            promise = axios.post(url,data)
        }
        promise.then((response)=>{
            resolve(response.data)
        }).catch((error)=>{
            reject(error)
        })
    })
}