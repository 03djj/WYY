import axios from "axios";

const baseUrl = "http://localhost:3000";


// 封装获取轮播图的api  调用例子:/banner , /banner?type=2  type=0,1,2,3
export function getBanner(type=0){
    return axios.get(`${baseUrl}/banner?type=${type}`);
}

// 音乐列表
export function getList(limit=10){
    return axios.get(`${baseUrl}/personalized?limit=${limit}`);
}

// 歌单详情
export function getxiangqing(id){
    return axios.get(`${baseUrl}/playlist/detail?id=${id}`);
}

// 歌词详情
export function getLyric(id){
    return axios.get(`${baseUrl}/lyric?id=${id}`);
}

export function getsearch(keywords){
    return axios.get(`${baseUrl}/search?keywords=${keywords}`);
}




//对外抛出
export default { getBanner,getList,getxiangqing,getsearch };