/**
 * ------------------------------------
 * File: d:\My Documents\Documents\GitHub\ChineseNumerals\test\testTochineseNumerals.js
 * Project: d:\My Documents\Documents\GitHub\ChineseNumerals
 * Created Date: 2021-02-18  10:11:52
 * Author: LiuQixuan(Atliuqixuan@hotmail.com)
 * -----
 * Last Modified:  2021-02-21  8:11:00
 * Modified By: LiuQixuan
 * -----
 * Copyright 2020 - 2021 AIUSoft by LiuQixuan
 * ------------------------------------
 */
import {numToChinanumerals} from "../lib/numToChinanumerals"

let testdata1 = ['2020020200', '2000202020', '202022222','202022202', '102210202020010200000020', '10100000000000000020', '10020202000', '10101010', '20', '2' ]
let testdata2 = [ '102310101010001200000020', '10100000000000000020', '705485621320500230020','10450001833013546048500','265001654100022545200152']
let testdata3 = ['123054650515600012','1210',10010,1010,101010101010]
let testdata4 = ['202020000', '102310101010001200000020', '123543.123315','12354.123121','0.154','-.215','-123.','135.0000']
let testdata5 = ['2','5','10','11','12','26','-12.2','0','-.23','']

// for(let i = 1;i<40;++i){
//   console.log("输入", i)
//   console.log("农历日期输出",numToChinanumerals(i,{format:'day'}))
// }

// for (let value of testdata5){
//   console.log("输入",value)
//   console.log("周输出",numToChinanumerals(value,{format:'WK'}))
//   console.log("星期输出",numToChinanumerals(value,{format:'wk'}))
//   console.log("天干输出",numToChinanumerals(value,{format:'hs'}))
//   console.log("地支输出",numToChinanumerals(value,{format:'eb'}))
// }

// for (let value of testdata1){
//   console.log("输入",value)
//   console.log("标准输出",numToChinanumerals(value,{format:'cn'}))
//   console.log("口语化输出",numToChinanumerals(value,{format:'cn spoken'}))
// }

// for (let value of testdata4) {
//   console.log("输入", value)
//   console.log("标准输出", numToChinanumerals(value, { format: 'cn' }))
//   console.log("金额输出", numToChinanumerals(value, { format: 'MONEY' }))
// }

// for (let value of testdata2) {
//   console.log("输入", value)
//   console.log("标准输出", numToChinanumerals(value, { format: 'cn' }))
//   console.log("标准输出", numToChinanumerals(value, { format: 'cn', base:'gb'}))
//   console.log("标准输出", numToChinanumerals(value, { format: 'cn', base:'tw' }))
// }

// console.log("正负值输出", numToChinanumerals(123456789))
// console.log("正负值输出", numToChinanumerals(+123456789))
// console.log("正负值输出", numToChinanumerals(-123456789))

// for (let value of testdata4){
//   console.log("输入",value)
//   // console.log("输出",numToChinanumerals(value,{format:'cn'}))
//   // console.log("输出",numToChinanumerals(value,{format:'CN'}))
//   console.log("输出",numToChinanumerals(value,{format:'ARMY'}))
//   console.log("输出",numToChinanumerals(value,{format:'army'}))
// }

// console.log(numToChinanumerals(
// console.log(numToChinanumerals('2020020200')) //test
// console.log(numToChinanumerals('1000200010')) //test
// console.log(numToChinanumerals('202020000')) //test
// console.log(numToChinanumerals('102310101010001200000020'))
// console.log(numToChinanumerals('10100000000000000020'))
// console.log(numToChinanumerals('12345678901234567890'))
// console.log(numToChinanumerals('705485621320500230020'))
// console.log(numToChinanumerals('10020202000')) //test
// console.log(numToChinanumerals('10101010')) //test
// console.log(numToChinanumerals('10')) //test
// console.log(numToChinanumerals('0')) //test

// console.log(numToChinanumerals('123456789',{format:'army'})) //test
// console.log(numToChinanumerals('0', { format:'army'})) //test

// console.log(numToChinanumerals('10', { format: 'money' })) //test
// console.log(numToChinanumerals('10101010', { format: 'money' })) //test
// console.log(numToChinanumerals('10101015', { format: 'MONEY' })) //test


//now
// console.log(numToChinanumerals('2310101010001200000020')) //test 1010,1010,0012,0000,0020
// console.log(numToChinanumerals('1200000020')) //test 1010,1010,0012,0000,0020
// console.log(numToChinanumerals('10101010000000000020', { format: 'cn' })) //test 1010,0000,0000,0020
// console.log(numToChinanumerals('10100000000000000020', { format: 'cn' })) //test

// console.log(numToChinanumerals('10101010000000000020', { format: 'money' })) //test
// console.log(numToChinanumerals('10101010000000000020', { format: 'cn', base: 'tw' })) //test
// console.log(numToChinanumerals('10101010000000000020', { format: 'CN', base: 'gb' })) //test
// console.log(numToChinanumerals('10101010000000000020', { format: 'cn', base: 'normal' })) //test


// console.log(numToChinanumerals('200200000', { format: 'cn spoken' })) //test
// console.log(numToChinanumerals('202000222', { format: 'cn spoken' })) //test
// console.log(numToChinanumerals('200200020220', { format: 'cn spoken' })) //test 2 w0201y 0230w  2002y 0002 0220



// console.log(numToChinanumerals('+200200020220', { format: 'cn' })) //test 2 w0201y 0230w  2002y 0002 0220
// console.log(numToChinanumerals('-200000020220', { format: 'cn' })) //test 2 w0201y 0230w  2002y 0002 0220
// console.log(numToChinanumerals('200000000220', { format: 'cn' })) //test 2 w0201y 0230w  2002y 0002 0220
// console.log(numToChinanumerals('220000220', { format: 'cn' })) //test 2 w0201y 0230w  2002y 0002 0220
// console.log(numToChinanumerals('2002', { format: 'cn' })) //test 2 w0201y 0230w  2002y 0002 0220
// console.log(numToChinanumerals('2000202000', { format: 'CN spoken' })) //test