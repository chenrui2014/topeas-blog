/**
 * Created by topeas on 2017/5/30.
 */

// import moment from 'moment'

export const date = (date) => {
  return date.split('T')[0]
}

export const timeAgo = (time) => {
  const preg = /^[\d]+$/
  if (!preg.test(time)) {
    let timestamp = Date.parse(time)
    time = timestamp / 1000
  }
  const between = Date.now() / 1000 - Number(time)
  if (between < 60) {
    return '刚刚'
  } else if (between < 3600) {
    return Math.floor(between / 60) + '分钟前'
  } else if (between < 24 * 3600) {
    return Math.floor(between / 3600) + '小时前'
  } else {
    return Math.floor(between / (24 * 3600)) + '天前'
  }

}
