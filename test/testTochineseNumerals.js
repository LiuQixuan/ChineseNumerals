"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numToChinanumerals_1 = require("../lib/numToChinanumerals");
var testdata1 = ['2020020200', '1000200010', '202020000', '102310101010001200000020', '10100000000000000020', '12345678901234567890', '705485621320500230020', '10020202000', '10101010', '10', '0'];
var testdata2 = ['102310101010001200000020', '10100000000000000020', '705485621320500230020', '10', '0'];
for (var _i = 0, testdata2_1 = testdata2; _i < testdata2_1.length; _i++) {
    var value = testdata2_1[_i];
    console.log("输入", value);
    console.log("输出", numToChinanumerals_1.numToChinanumerals(value, { format: 'cn' }));
    console.log("输出", numToChinanumerals_1.numToChinanumerals(value, { format: 'CN' }));
}
//# sourceMappingURL=testTochineseNumerals.js.map