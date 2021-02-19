/**
 * ------------------------------------
 * File: d:\My Documents\Documents\GitHub\ChineseNumerals\test\testTochineseNumerals.js
 * Project: d:\My Documents\Documents\GitHub\ChineseNumerals
 * Created Date: 2021-02-18  10:11:52
 * Author: LiuQixuan(Atliuqixuan@hotmail.com)
 * -----
 * Last Modified:  2021-02-19  10:37:45
 * Modified By: LiuQixuan
 * -----
 * Copyright 2020 - 2021 AIUSoft by LiuQixuan
 * ------------------------------------
 */
import {numToChinanumerals} from "../lib/numToChinanumerals"

let testdata1 = [ '2020020200', '1000200010', '202020000', '102310101010001200000020', '10100000000000000020', '12345678901234567890', '705485621320500230020', '10020202000', '10101010', '10', '0' ]
let testdata2 = [ '102310101010001200000020', '10100000000000000020', '705485621320500230020', '10', '0' ]

for (let value of testdata2){
  console.log("输入",value)
  console.log("输出",numToChinanumerals(value,{format:'cn'}))
  console.log("输出",numToChinanumerals(value,{format:'CN'}))
}


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