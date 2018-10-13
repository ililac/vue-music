import {
  playMode
} from 'common/js/config'
import {
  loadSearch,
  loadPlay
} from 'common/js/cache'
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
  searchHistory: loadSearch(), // 搜索历史
  playHistory: loadPlay() // 播放历史
}
export default state
