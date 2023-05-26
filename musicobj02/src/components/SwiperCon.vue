<template>
    <div id="swipercom">
        <div class="swiper-container" id="swiperIndex">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in swipercon.imgs" :key="index">
                    <img :src="item.pic">
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
import { getBanner } from "@/api/index"
import { onMounted,onUpdated,reactive } from "vue"
export default {
    name:"SwiperCon",
    // data() {
    //     return {
    //         imgs:[  //轮播图的数据
    //             {pic:require("../assets/logo.png")},
    //             {pic:require("../assets/logo.png")},
    //             {pic:require("../assets/logo.png")},
    //             {pic:require("../assets/logo.png")},
    //             {pic:require("../assets/logo.png")},
    //             {pic:require("../assets/logo.png")},
    //             {pic:require("../assets/logo.png")}
    //         ]
    //     }
    // },
    setup(){
        const swipercon=reactive({
                imgs:[]
            })
        onMounted(async() => {
            var res = await getBanner(1);
            swipercon.imgs=res.data.banners;
        })
        onUpdated(()=>{
            var myswiper = new Swiper("#swiperIndex",{
            loop:true,  //循环播放
            // autoplay:true    //自动轮播
            pagination:{
                el:".swiper-pagination",
                clickable:true  //分页小圆点可以点击
            }
            })
        })

        return {swipercon}
    },
    // async mounted(){     //async......await  异步ajax请求函数
    //     var res = await getBanner(1);
    //     this.imgs=res.data.banners;
    //     var myswiper = new Swiper("#swiperIndex",{
    //         loop:true,  //循环播放
    //         // autoplay:true    //自动轮播
    //         pagination:{
    //             el:".swiper-pagination",
    //             clickable:true  //分页小圆点可以点击
    //         }
    //     })
    // }
}
</script>

<style lang="less">
    #swipercom{
        width:7.5rem;
    #swiperIndex.swiper-container{
        width:7.1rem;
        height:2.6rem;
        border-radius:0.1rem;

        .swiper-slide img{
            width:100%;
        }
        .swiper-pagination-bullet-active{
        background-color:orangered;
        }
        }
        }
</style>