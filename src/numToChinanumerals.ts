/**
 * ------------------------------------
 * File: d:\My Documents\Documents\GitHub\ChineseNumerals\src\numToChinanumerals.ts
 * Project: d:\My Documents\Documents\GitHub\ChineseNumerals
 * Created Date: 2021-02-18  10:23:46
 * Author: LiuQixuan(Atliuqixuan@hotmail.com)
 * -----
 * Last Modified:  2021-02-19  10:59:58
 * Modified By: LiuQixuan
 * -----
 * Copyright 2020 - 2021 AIUSoft by LiuQixuan
 * ------------------------------------
 */

let nm: Array<string> = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '百', '千', '万', '亿', '太', '京', '垓', '兆', '两']
let cn: Array<string> = ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '百', '千', '万', '亿', '太', '京', '垓', '兆', '两']
let CN: Array<string> = ['零', '壹', '貳', '叁', '肆', '伍', '陆', '柒', '捌', '玖', '拾', '佰', '仟', '萬', '億', '太', '京', '垓', '兆', '两']
let army: Array<string> = ['洞', '幺', '两', '三', '四', '五', '六', '拐', '八', '钩']
let ARMY: Array<string> = ['洞', '幺', '两', '叁', '肆', '伍', '陆', '拐', '捌', '钩']

let arrOffset = nm.length - 2;

interface config {
  'money': boolean,
  'spoken': boolean
}

function numToArray(value: string, config: config = { money: false, spoken: false }): Array<number> {
  let r_arr: Array<number>
  for (let ii = 0; ii < value.length; ++ii) {
    if (value[ii] !== '0') {
      value = value.slice(ii)
      break
    }
  }
  r_arr = Array.from(value).reverse().map(function (v: string): number { return parseInt(v); })

  var tmp: Array<Array<number>> = []
  while (r_arr.length > 4) {
    tmp.push(r_arr.slice(0, 4))
    r_arr = r_arr.slice(4)
  }
  tmp.push(r_arr)
  let rank: number = tmp.length - 1
  let result: Array<number> = []
  for (let i: number = rank; i > -1; --i) {
    let buff: Array<number> = []
    tmp[i].reverse()
    for (var j: number = 0; j < tmp[i].length; ++j) {
      let m = tmp[i].length - 1
      if (tmp[i][j] !== 0) {
        if (config.spoken && tmp[i][j] === 2 && ((rank > 1 && tmp[i].length === 1 && j === 0) || (tmp[i].length === 3 && j === 0) || (tmp[i].length === 4 && (j === 0 || j === 1)) || (rank - i > 1 && j === 3 && tmp[i][1] === 0 && tmp[i][2] === 0))) {
          buff.push(arrOffset + 1)
        } else {
          buff.push(tmp[i][j])
        }
      }
      if (tmp[i][j] !== 0 && m - j != 0) {
        if ((!config.money) && tmp[i][j] === 1 && m - j === 1 && (tmp[i].length === 2 && rank * 4 + 2 === value.toString().length)) {
          buff.pop()
        }
        buff.push(9 + m - j)
      }
    }
    result = result.concat(buff)
    //join in 'bai,qia,wan,yi'
    if (i != 0 && buff.length !== 0) {
      result.push(i + 0xc)
    }
  }
  // console.log('result', result)
  let index = []
  for (let i = 0; i < result.length - 1; ++i) {
    if (result[i] > 10 && result[i] < 15) {
      let flag: boolean = true
      for (let j = i + 1; j < result.length; ++j) {
        if (result[j] > 14) {
          continue
        }
        if (result[i] === 14) {

          let findT = result.indexOf(12)
          if (findT > -1 && findT < i) {
            findT = result.slice(findT + 1).indexOf(12)
          }
          let findM = result.indexOf(13)
          if (findT > -1 && findM > -1 && findT < findM) {
            flag = false
            break
          }
        } else {
          if (result[j] > 9 && result[j] == result[i] - 1) {
            flag = false
          }
          else if (result[i] < result[j]) {
            if (i === j - 1) {
              flag = false
            }
            break
          }
        }
      }
      if (flag) {
        index.push(i)
      }
    }
  }
  let indexOffset = 1
  index.forEach((v, i, arr) => { arr[i] += indexOffset++ })
  index.forEach(v => { result.splice(v, 0, 0) })
  return result
}

interface option {
  //format:['normal'|'cn'|'CN'|'army'|'ARMY'|'money'|'MONEY']
  format: string,
  //base:['normal'|'gb'|'tw']
  base?: string
}


function numToChinanumerals(num: number | string | bigint = 0, option: option = { format: 'normal', base: 'normal' }): string {
  let value: string = ''
  let value2: string = ''
  let str: string = ''
  let res: Array<number> = []
  let res2: Array<number> = []
  let arr: Array<string> = cn
  let sign = 0
  option = Object.assign({ format: 'normal', base: 'normal' }, option)

  if (typeof num === "number" || typeof num === "bigint") {
    value = num.toString()
  } else if (typeof num === "string") {
    value = num.replace(/[^\.\-\+0-9]/g, '').replace(/^0+/, '').replace(/(?<=.)(?:-|\+)+/g, '')
  } else {
    throw new Error("Just only handle number by string or number types or bigint types.")
  }
  if (/^[\-\+]$/.test(value[0])) {
    sign = /^-$/.test(value[0]) ? -1 : 1
    value = value.slice(1)
  }

  if (/normal/i.test(option.format)) {
    arr = nm
    str = sign === 1 ? '正' : sign === -1 ? '负' : ''
  }
  else if (/cn/.test(option.format)) {
    arr = cn
    str = sign === 1 ? '正' : sign === -1 ? '负' : ''
  }
  else if (/CN/.test(option.format)) {
    arr = CN
    str = sign === 1 ? '正' : sign === -1 ? '負' : ''
  }
  else if (/army/.test(option.format)) {
    arr = army
  }
  else if (/ARMY/.test(option.format)) {
    arr = ARMY
  }
  else if (/money/.test(option.format)) {
    arr = cn
    arr.push('元')
    arr.push('整')
    str = sign === 1 ? '正' : sign === -1 ? '负' : ''
  }
  else if (/MONEY/.test(option.format)) {
    arr = CN
    arr.push('圆')
    arr.push('整')
    str = sign === 1 ? '正' : sign === -1 ? '負' : ''
  }
  else {
    throw new SyntaxError("[Error] failed to parse format argument");
  }

  if (value.length === 0 || (value.length === 1 && value[0] === '0')) {
    str = arr[0]
  } else if (/(?:(?:army)|(?:ARMY))/.test(option.format)) {
    for (let item of value) {
      str += arr[parseInt(item)]
    }
  } else {
    if (value.length > 12) {
      value2 = value.slice(0, -12)
      value = value.slice(-12)
      if (value2.length > 12) {
        throw new Error("Just only handle normal numbers.")
      }
    }
    res = numToArray(value, { money: /money/i.test(option.format), spoken: /spoken/i.test(option.format) })
    if (value2.length !== 0) {
      // console.log('option', option)
      res2 = numToArray(value2, { money: /money/i.test(option.format), spoken: /spoken/i.test(option.format) })
      if (/^normal$/.test(option.base as string)) {
        let bPoint = -1 //bPoint
        let wPoint = -1 //ten thousand point
        for (let i in res2) {
          if (res2[i] === 13) {
            res2[i] = 14
            bPoint = parseInt(i) + 1
          } else if (res2[i] === 14) {
            res2[i] = 13
            wPoint = parseInt(i) + 1
          }
        }
        if (bPoint !== -1) {
          res2.splice(bPoint, 0, 14)
        }
        if (wPoint !== -1) {
          res2.splice(wPoint, 0, 14)
          res2.splice(wPoint, 0, 14)
        }
        if (res2[res2.length - 1] !== 14) {
          res2.push(13)// cn[16]==='京' cn[15]==='太' cn[14]==='亿' cn[13]==='万' cn[12] ==='千'
          res2.push(14)
        }
        if (res.indexOf(14) !== -1) { //大数后半段含'亿'
          if (res.indexOf(12) === -1 || res.indexOf(12) > res.indexOf(14)) {
            res2.push(0)
          }
        }
        else {
          // res2.push(14)
          if (res.length !== 0) {
            res2.push(0)
          }
        }
      } else if (/^gb$/.test(option.base as string) || /^tw$/.test(option.base as string)) {
        for (let i in res2) {
          if (res2[i] === 13) {
            res2[i] = 16
          } else if (res2[i] === 14) {
            res2[i] = 17
            // res2.splice(parseInt(i) + 1, 0, arrOffset)
          }
        }
        if (res2.indexOf(16) !== res2.length - 1) {
          if (/^tw$/.test(option.base as string)) {
            res2.push(18)// cn[16]==='京' cn[15]==='太' cn[14]==='亿' cn[13]==='万' cn[12] ==='千'

          } else {
            res2.push(15)// cn[16]==='京' cn[15]==='太' cn[14]==='亿' cn[13]==='万' cn[12] ==='千'
          }

        }
        if (res.indexOf(14) !== -1) { //大数后半段含'亿'
          if (res.indexOf(12) === -1 || res.indexOf(12) > res.indexOf(14)) {
            res2.push(0)
          }
        }
        else {
          // res2.push(14)
          if (res.length !== 0) {
            res2.push(0)
          }
        }
      }
    }
    if (res2.length !== 0) {
      for (let v of res2) {
        str += arr[v]
      }
    }
    for (let v of res) {
      str += arr[v]
    }

    if (/money/i.test(option.format)) {
      str += arr[arr.length - 2]
      if (res[res.length - 1] > 9) {
        str += arr[arr.length - 1]
      }
    }
  }
  return str
}

export { numToChinanumerals }