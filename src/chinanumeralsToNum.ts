/**
 * ------------------------------------
 * File: d:\My Documents\Documents\GitHub\ChineseNumerals\src\chinanumeralsToNum.ts
 * Project: d:\My Documents\Documents\GitHub\ChineseNumerals
 * Created Date: 2021-02-18  10:35:23
 * Author: LiuQixuan(Atliuqixuan@hotmail.com)
 * -----
 * Last Modified:  2021-02-21  7:08:47
 * Modified By: LiuQixuan
 * -----
 * Copyright 2020 - 2021 AIUSoft by LiuQixuan
 * ------------------------------------
 */

let army: Map<string, string> = new Map([['洞', '0'], ['幺', '1'], ['两', '2'], ['三', '3'], ['四', '4'], ['五', '5'], ['六', '6'], ['拐', '7'], ['八', '8'], ['钩', '9']])
let ARMY: Map<string, string> = new Map([['洞', '0'], ['幺', '1'], ['两', '2'], ['叁', '3'], ['肆', '4'], ['伍', '5'], ['陆', '6'], ['拐', '7'], ['捌', '8'], ['钩', '9']])


interface option {
  "format": string
}

function strToArray(v_str: string): Array<number> {
  let matchLists: Array<Array<string>> = [['〇', '零'], ['一', '壹'], ['二', '貳', '两'], ['三', '叁'], ['四', '肆'], ['五', '伍'], ['六', '陆'], ['七', '柒'], ['八', '捌'], ['九', '玖'], ['十', '拾'], ['百', '佰'], ['千', '仟'], ['万', '萬'], ['亿', '億'], ['太', '兆', '万亿'], ['京', '亿亿'], ['垓', '万亿亿']]
  let strArr: Array<string>
  let numArr: Array<number>
  if (v_str === '') {
    numArr = [0]
  } else {
    if (/[角|分|厘]/.test(v_str)) {
      let tmp: string = ''
      if (v_str.search('角') !== -1) {
        tmp += v_str[v_str.search('角') - 1]
      } else {
        tmp += '零'
      }
      if (v_str.search('分') !== -1) {
        tmp += v_str[v_str.search('分') - 1]
      } else {
        tmp += '零'
      }
      if (v_str.search('厘') !== -1) {
        tmp += v_str[v_str.search('厘') - 1]
      } else {
        tmp += '零'
      }
      v_str = tmp
    }
    if (v_str.search('十') !== -1) {
      v_str = v_str.replaceAll('一十', '十')
    } else if (v_str.search('拾')) {
      v_str = v_str.replaceAll('壹拾', '拾')
    }
    for (let i = matchLists.length - 1; i > -1; --i) {
      let matchStr: string = ''
      for (let match of matchLists[i]) {
        if (v_str.search(match) !== -1) {
          matchStr = match
          break
        }
      }
      if (matchStr !== '') {
        v_str = v_str.replaceAll(matchStr, '/' + i)
      }
    }
    v_str = v_str.replace(/(?:^\/10)|(?:\/0\/10)/g, '/1/10')

    strArr = v_str.split('/')
    if (strArr[0] === '') {
      strArr.shift()
    }
    numArr = strArr.map((v: string): number => { return parseInt(v) })
  }
  return numArr
}
function chinanumeralsToNum(v_str: string = '', option: option): string {
  let result: string = ''
  let dict: Map<string, string> = new Map()
  if (/(ARMY|army)/.test(option.format)) {
    dict = /army/.test(option.format) ? army : ARMY
    for (let char of v_str) {
      result += dict.get(char)
    }
  } else if (/(cn|CN)/.test(option.format)) {
    let numArr1, numArr2: Array<number>
    let cutIndex: number
    let moneyFlag: boolean = v_str.search(/[元|圆]/) !== -1
    let decimalFlag: boolean = v_str.search(/[点|點]/) !== -1 || (moneyFlag && v_str.search(/[整|正]/) === -1)
    v_str.replace(/[整|正]/g, '')
    let decimal: string = ''
    if (decimalFlag) {
      decimal = v_str.slice(v_str.search(/[点|點|元]/) + 1)
      v_str = v_str.slice(0, v_str.search(/[点|點|元]/))
    }

    numArr1 = numArr2 = []
    numArr1 = strToArray(v_str)
    if (numArr1.indexOf(15) !== -1) {
      cutIndex = numArr1.indexOf(15)
      numArr2 = numArr1.slice(0, cutIndex)
      numArr1 = numArr1.slice(cutIndex + 1)
    } else {
      if (numArr1.indexOf(16) !== -1) {
        cutIndex = numArr1.indexOf(16)
      } else {
        cutIndex = numArr1.indexOf(17)
      }
      if (cutIndex !== -1) {
        numArr2 = numArr1.slice(0, cutIndex + 1)
        numArr1 = numArr1.slice(cutIndex + 1)
      }
    }
    let result1, result2: number
    result1 = result2 = 0
    let base: Array<number> = [10, 100, 1000, 10000, Math.pow(10, 8),]
    let tmp: number = 0
    for (let i = 0; i < numArr1.length; ++i) {
      if (numArr1[i] < 10) {
        if (i === numArr1.length - 1 || numArr1[i + 1] > 12) {
          tmp += numArr1[i]
        }
      } else if (numArr1[i] > 9 && numArr1[i] < 13) {
        if (numArr1[i - 1] > 9) {
          throw new Error(`${v_str}:${numArr1}:${i}:${numArr1[i - 1]}`)
        }
        tmp += numArr1[i - 1] * base[numArr1[i] - 10]
      } else if (numArr1[i] > 12) {
        result1 += base[numArr1[i] - 10] * tmp
        tmp = 0
      }
      if (i === numArr1.length - 1) {
        result1 += tmp
      }
    }
    result += String(result1)
    if (numArr2.length) {
      tmp = 0
      for (let i = 0; i < numArr2.length; ++i) {
        if (numArr2[i] < 10) {
          if (i === numArr2.length - 1 || numArr2[i + 1] > 12) {
            tmp += numArr2[i]
          }
        } else if (numArr2[i] > 9 && numArr2[i] < 13) {
          if (numArr2[i - 1] > 9) {
            throw new Error(`${v_str}:${numArr2}:${i}:${numArr2[i - 1]}`)
          }
          tmp += numArr2[i - 1] * base[numArr2[i] - 10]
        } else if (numArr2[i] > 15) {
          result2 += base[numArr2[i] - 13] * tmp
          tmp = 0
        }
        if (i === numArr2.length - 1) {
          result2 += tmp
        }
      }
      while (result.length < 12) {
        result = '0' + result
      }
      result = String(result2) + result

    }
    if (decimalFlag) {
      let deciNum = strToArray(decimal)
      for (let i = deciNum.length - 1; i > -1; --i) {
        if (deciNum[i] !== 0) {
          deciNum = deciNum.slice(0, i + 1)
          break
        }
      }
      if (!/^0*$/.test(deciNum.join(''))){
        result = result + '.' + deciNum.join('')
      }
    }
  }


  return result
}
export { chinanumeralsToNum } 