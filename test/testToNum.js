"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chinanumeralsToNum_1 = require("../lib/chinanumeralsToNum");
var testdata1 = [
    '一千〇二十三万亿亿一千〇一十亿亿一千〇一十万亿〇十二亿〇二十',
    '一千〇二十三垓一千〇一十京一千〇一十太〇十二亿〇二十',
    '一千〇一十亿亿〇二十',
    '七万亿亿〇五百四十八亿亿五千六百二十一万亿三千二百〇五亿〇二十三万〇二十',
    '七垓〇五百四十八京五千六百二十一兆三千二百〇五亿〇二十三万〇二十'
];
var testdata2 = [
    '十二万三千五百四十三点一二三三一五',
    '拾貳萬叁仟伍佰肆拾叁點壹貳叁叁壹伍',
    '零元貳角壹分伍厘',
    '壹佰叁拾伍元整',
    '零元零角零分零厘',
    '零元零角壹分零厘',
];
for (var _i = 0, testdata1_1 = testdata1; _i < testdata1_1.length; _i++) {
    var value = testdata1_1[_i];
    console.log("输入", value);
    console.log("输出", chinanumeralsToNum_1.chinanumeralsToNum(value, { format: 'cn' }));
}
//# sourceMappingURL=testToNum.js.map