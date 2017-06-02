/**
 * Created by topeas on 2017/5/31.
 */

export function deepClone (obj) {
  let newObj = {}
  if (typeof obj !== 'object') {
    return false
  }
  for (let pro in obj) {
    if (typeof obj[pro] === 'object') {
      newObj[pro] = Array.isArray(obj[pro]) ? [] : {}
      newObj[pro] = deepClone(obj[pro])
    } else {
      newObj[pro] = obj[pro]
    }
  }
  return newObj
}


