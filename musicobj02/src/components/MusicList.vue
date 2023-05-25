<template>
    <div id="swipercom">
        <div class="swiper-container" id="swiperList">
            <div class="swiper-wrapper">
                <div class="swiper-slide tupian" v-for="(item,index) in results" :key="index">
                    <img :src="item.picUrl" alt="">
                </div>
            </div>
            <div class="swiper-pagination">

            </div>
        </div>
    </div>
</template>

<script>
import "swiper/css/swiper.css"
import Swiper from 'swiper'
import { getList } from "@/api/index"
export default {
    name:"MusicList",
    data() {
        return {
            results:[  //轮播图的数据
                {picUrl:require("../assets/logo.png")},
                {picUrl:require("../assets/logo.png")},
                {picUrl:require("../assets/logo.png")},
                {picUrl:require("../assets/logo.png")},
                {picUrl:require("../assets/logo.png")},
                {picUrl:require("../assets/logo.png")},
                {picUrl:require("../assets/logo.png")}
            ]
        }
    },
    async mounted(){     //async......await  异步ajax请求函数
        var res = await getList(30);
        this.results=res.data.result;
        var myswiper = new Swiper("#swiperList",{
            slidesPerView: 3
        })
    }
}
</script>

<style>
    .tupian img{
        width: 34%;
        height: 100px;
    }
</style>