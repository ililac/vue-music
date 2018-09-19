import {
  playMode
} from 'common/js/config'
const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playList: [],
  sequenceList: [], // 顺序列表
  mode: playMode.sequence,
  currentIndex: -1,
  disc: {},
  topList: {}, // 排行榜数据
  searchHistory: [] // 搜索历史
}
export default state
