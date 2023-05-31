<template>
    <div class="playController">
        <div class="left">
            <img :src="playlist[playCurrentIndex].al.picUrl" alt="" @click="show=!show">
            <div class="content">
                <div class="title">{{ playlist[playCurrentIndex].name }}</div>
                <div class="tips">横滑可以切换上下首</div>
            </div>
        </div>
        <div class="right">
            <svg class="icon" aria-hidden="true" @click="play" v-if="flag">
                <use xlink:href="#icon-bofang1"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="play" v-else>
                <use xlink:href="#icon-iconstop"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liebiao1"></use>
            </svg>
        </div>


        <!-- 歌曲详情 -->
        <play-music v-show="show" :flags="flag" :play="play" :playDetail="playlist[playCurrentIndex]" @back="show=!show"></play-music>

        <!-- 如何获取播放歌曲的mp3地址 https://music.163.com/song/media/outer/url?id=歌曲id.mp3 -->
        <!-- controls audio标签属性  一般不显示  -->
        <!-- audio play()播放 pause()暂停 paused当前歌曲是否处于暂停状态  -->
        <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`"></audio>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import store from '@/store/index';
import { getLyric } from '@/api/index'
import playMusic from '@/components/PlayMusic.vue'

export default{
    name:"playcontroller",
    data() {
        return {
            // flag:flag
            show:false
        }
    },
    computed:{
        ...mapState(["playlist","playCurrentIndex","flag"])
    },
    async mounted() {
        var res = await getLyric(this.playlist[this.playCurrentIndex].id);
        store.commit("setLyric",res.data.lrc.lyric);
    },
    async updated() {
        var res = await getLyric(this.playlist[this.playCurrentIndex].id);
        store.commit("setLyric",res.data.lrc.lyric);
    },
    methods:{
        play(){
            if(this.$refs.audio.paused){
                this.$refs.audio.play();
                store.commit('setflag', false);
            }else{
                this.$refs.audio.pause();
                store.commit('setflag', true);
            }
        }
    },
    components:{
        playMusic
    }
}
</script>

<style lang="less" scoped>
.playController {
    background: #fff;
    width: 7.5rem;
    height: 1.2rem;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ccc;

    .left {
        display: flex;
        padding: 0 0.2rem;

        img {
            width: 0.8rem;
            height: 0.8rem;
            border-radius: 0.4rem;
        }

        .content {
            padding: 0 0.2rem;

            .tips {
                font-size: 0.2rem;
                color: #999;
            }
        }
    }

    .right {
        .icon {
            width: 0.4rem;
            height: 0.4rem;
            margin: 0 0.2rem;
        }
    }
}
</style>
