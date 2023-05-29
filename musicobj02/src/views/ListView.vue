<template>
    <div>
        <!-- 歌单详情 -->
        <listview-top :arr1="music.playlist"></listview-top>
        <!-- 歌曲列表 -->
        <play-list :arr2="music.playlist"></play-list>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { onMounted,reactive } from 'vue';
import { getxiangqing } from "@/api/index"
import listviewTop from '@/components/ListViewTop.vue'
import playList from '@/components/PlayList.vue'
export default{
    name:"listview",
    setup(){
            const music=reactive({
                list:[],
                playlist:{
                    creator:{}, //歌单详情
                    tracks:[]   //播放列表
                }
            })
        
        var route=useRoute();
        onMounted(async ()=>{

            const id = route.query.id;
            console.log(id);

            var res = await getxiangqing(id);
            music.playlist=res.data.playlist;
            console.log(music.playlist);
            // console.log(music.playlist.creator);
        })
        return { music }
    },
    components:{
        listviewTop,playList,
    },

}
</script>