import {
  getLyric
} from 'api/song'
import {
  ERR_OK
} from 'api/config'
import {
  Base64
} from 'js-base64'

export default class Song {
  constructor({
    id,
    mid,
    singer,
    name,
    album,
    duration,
    image,
    url
  }) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }

  getLyric() {
    if (this.lyric) {
      return Promise.resolve(this.lyric)
    }

    return new Promise((resolve, reject) => {
      getLyric(this.mid).then((res) => {
        if (res.retcode === ERR_OK) {
          this.lyric = Base64.decode(res.lyric)
          resolve(this.lyric)
        } else {
          reject(this.statusText)
        }
      })
    })
  }
}

export function createSong(musicData) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    url: `http://dl.stream.qqmusic.qq.com/http://dl.stream.qqmusic.qq.com/C400${musicData.songmid}.m4a?guid=8463601436&vkey=20FBC8ED67AC3E48E8C36EFA5E44FA7C38FCBEE7D8B4DDDE9DF9D54B30F4C9AB540DC912428F23CE43762B7FC1CD8FA8B7E60B8FDB21753A&uin=0&fromtag=38`
  })
}
export function filterSinger(singer) {
  let ret = []
  if (!singer) {
    return ''
  }
  singer.forEach((s) => {
    ret.push(s.name)
  })
  return ret.join('/')
}
