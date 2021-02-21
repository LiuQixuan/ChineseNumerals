/**
 * ------------------------------------
 * File: d:\My Documents\Documents\GitHub\ChineseNumerals\test\testToNum.js
 * Project: d:\My Documents\Documents\GitHub\ChineseNumerals
 * Created Date: 2021-02-18  10:12:12
 * Author: LiuQixuan(Atliuqixuan@hotmail.com)
 * -----
 * Last Modified:  2021-02-21  7:08:47
 * Modified By: LiuQixuan
 * -----
 * Copyright 2020 - 2021 AIUSoft by LiuQixuan
 * ------------------------------------
 */


import { chinanumeralsToNum } from "../lib/chinanumeralsToNum"

let testdata1 = [
  '一千〇二十三万亿亿一千〇一十亿亿一千〇一十万亿〇十二亿〇二十',
  '一千〇二十三垓一千〇一十京一千〇一十太〇十二亿〇二十',
  // '一千〇二十三垓一千〇一十京一千〇一十兆〇十二亿〇二十',
  '一千〇一十亿亿〇二十',
  // '一千〇一十京〇二十',
  // '一千〇一十京〇二十',
  '七万亿亿〇五百四十八亿亿五千六百二十一万亿三千二百〇五亿〇二十三万〇二十',
  // '七垓〇五百四十八京五千六百二十一太三千二百〇五亿〇二十三万〇二十',
  '七垓〇五百四十八京五千六百二十一兆三千二百〇五亿〇二十三万〇二十'
]

let testdata2 = [
  '十二万三千五百四十三点一二三三一五',
  '拾貳萬叁仟伍佰肆拾叁點壹貳叁叁壹伍',
  '零元貳角壹分伍厘',
  '壹佰叁拾伍元整',
  '零元零角零分零厘',
  '零元零角壹分零厘',
]

for (let value of testdata1) {
  console.log("输入", value)
  console.log("输出", chinanumeralsToNum(value, { format: 'cn' }))
}

