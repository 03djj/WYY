import { createStore } from 'vuex'

export default createStore({
  state: {  // 组件中共享的数据
    playlist:[   //音乐播放列表   是一个数组 
      {
        name: "断桥残雪", 
        id: 167937, 
        al:{
          id: 16960,
          name: "断桥残雪",
          pic: 19061133579343590,
          picUrl: "https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
          pic_str: "19061133579343591",
        }
      } 
    ],
    playCurrentIndex:0,  // 当前播放音乐在音乐列表中的下标
    flag:true,
    lyric:"abc"  //保存当前歌词
  },
  getters: {
  },
  mutations: {
    setPlayList(state,value){ //定义一个函数用来修改state中播放列表的数据
      state.playlist = value;
    },
    setPlayIndex(state,value){  //定义一个函数用来修改当前正在播放歌曲的下标
      state.flag = true;
      state.playCurrentIndex = value;
    },
    setflag(state,value){   //定义一个函数用来修改播放暂停的按钮状态
      state.flag = value;
    },
    setLyric(state,value){
      state.lyric = value
    }
  },
  actions: {
  },
  modules: {
  }
})
