/**
 * ------------------------------------
 * File: d:\My Documents\Documents\GitHub\ChineseNumerals\src\chinanumeralsToNum.ts
 * Project: d:\My Documents\Documents\GitHub\ChineseNumerals
 * Created Date: 2021-02-18  10:35:23
 * Author: LiuQixuan(Atliuqixuan@hotmail.com)
 * -----
 * Last Modified:  2021-02-18  11:20:40
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

function chinanumeralsToNum(v_str: string, option: option): string {
  let result: string = ''
  let dict: Map<string, string> = new Map()
  if (/(ARMY|army)/.test(option.format)) {
    dict = /army/.test(option.format) ? army : ARMY
    for (let char of v_str) {
      result += dict.get(char)
    }
  } else if (/(cn|CN)/.test(option.format)){
    
  }


  return result
}
export { chinanumeralsToNum } 