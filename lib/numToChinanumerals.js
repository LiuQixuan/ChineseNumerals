"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numToChinanumerals = void 0;
var nm = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '百', '千', '万', '亿', '太', '京', '垓', '兆', '两'];
var cn = ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '百', '千', '万', '亿', '太', '京', '垓', '兆', '两'];
var CN = ['零', '壹', '貳', '叁', '肆', '伍', '陆', '柒', '捌', '玖', '拾', '佰', '仟', '萬', '億', '太', '京', '垓', '兆', '两'];
var army = ['洞', '幺', '两', '三', '四', '五', '六', '拐', '八', '钩'];
var ARMY = ['洞', '幺', '两', '叁', '肆', '伍', '陆', '拐', '捌', '钩'];
var decimalBase = ['納', '角', '分', '厘', '毫', '微', '纳', '皮'];
var arrOffset = nm.length - 2;
function decimalToArray(value, money) {
    if (money === void 0) { money = false; }
    var result = [];
    if (money) {
        value = value.slice(0, 3);
        for (var i = 0; i < value.length; ++i) {
            if (value[i] !== '0') {
                result.push(parseInt(value[i]));
                result.push((i + 1) * -1);
            }
            else {
                if (result.length === 0) {
                    result.push(0);
                }
                else if (result[result.length - 1] !== 0) {
                    result.push(0);
                }
            }
        }
    }
    else {
        result = Array.from(value).map(function (v) { return parseInt(v); });
    }
    return result;
}
function numToArray(value, config) {
    if (config === void 0) { config = { money: false, spoken: false }; }
    var r_arr;
    for (var ii = 0; ii < value.length; ++ii) {
        if (value[ii] !== '0') {
            value = value.slice(ii);
            break;
        }
    }
    r_arr = Array.from(value).reverse().map(function (v) { return parseInt(v); });
    var tmp = [];
    while (r_arr.length > 4) {
        tmp.push(r_arr.slice(0, 4));
        r_arr = r_arr.slice(4);
    }
    tmp.push(r_arr);
    var rank = tmp.length - 1;
    var result = [];
    for (var i = rank; i > -1; --i) {
        var buff = [];
        tmp[i].reverse();
        for (var j = 0; j < tmp[i].length; ++j) {
            var m = tmp[i].length - 1;
            if (tmp[i][j] !== 0) {
                if (config.spoken && tmp[i][j] === 2 && ((rank > 1 && tmp[i].length === 1 && j === 0) || (tmp[i].length === 3 && j === 0) || (tmp[i].length === 4 && (j === 0 || j === 1) || (rank - i > 1 && j === 3 && tmp[i][1] === 0)))) {
                    buff.push(arrOffset + 1);
                }
                else {
                    buff.push(tmp[i][j]);
                }
            }
            if (tmp[i][j] !== 0 && m - j != 0) {
                if ((!config.money) && tmp[i][j] === 1 && m - j === 1 && ((tmp[i].length === 2 && rank * 4 + 2 === value.toString().length))) {
                    buff.pop();
                }
                buff.push(9 + m - j);
            }
        }
        result = result.concat(buff);
        if (i != 0 && buff.length !== 0) {
            result.push(i + 0xc);
        }
    }
    var index = [];
    for (var i = 0; i < result.length - 1; ++i) {
        if (result[i] > 10 && result[i] < 15) {
            var flag = true;
            for (var j_1 = i + 1; j_1 < result.length; ++j_1) {
                if (result[j_1] > 14) {
                    continue;
                }
                if (result[i] === 14) {
                    var findT = result.indexOf(12);
                    if (findT > -1 && findT < i) {
                        findT = result.slice(findT + 1).indexOf(12);
                    }
                    var findM = result.indexOf(13);
                    if (findT > -1 && findM > -1 && findT < findM) {
                        flag = false;
                        break;
                    }
                }
                else {
                    if (result[j_1] > 9 && result[j_1] == result[i] - 1) {
                        flag = false;
                    }
                    else if (result[i] < result[j_1]) {
                        if (i === j_1 - 1) {
                            flag = false;
                        }
                        break;
                    }
                }
            }
            if (flag) {
                index.push(i);
            }
        }
    }
    var indexOffset = 1;
    index.forEach(function (v, i, arr) { arr[i] += indexOffset++; });
    index.forEach(function (v) { result.splice(v, 0, 0); });
    return result;
}
function numToChinanumerals(num, option) {
    if (num === void 0) { num = 0; }
    if (option === void 0) { option = { format: 'normal', base: 'normal' }; }
    var value = '';
    var value2 = '';
    var str = '';
    var res = [];
    var res2 = [];
    var arr = cn;
    var sign = 0;
    var decimalFlag = false;
    var decimal = '';
    option = Object.assign({ format: 'normal', base: 'normal' }, option);
    if (typeof num === "number" || typeof num === "bigint") {
        value = num.toString();
    }
    else if (typeof num === "string") {
        value = num.replace(/[^\.\-\+0-9]/g, '').replace(/^0+/, '').replace(/(?<=.)(?:-|\+)+/g, '');
    }
    else {
        throw new Error("Just only handle number by string or number types or bigint types.");
    }
    if (/^[\-\+]$/.test(value[0])) {
        sign = /^-$/.test(value[0]) ? -1 : 1;
        value = value.slice(1);
    }
    if (/\.+/g.test(value)) {
        decimalFlag = true;
        decimal = value.slice(value.search(/\.+/g) + 1).replace(/\.+/g, '');
        value = value.slice(0, value.search(/\.+/g));
    }
    if (/normal/i.test(option.format)) {
        arr = nm;
        if (!(value.length === 0 && /^0+$/.test(decimal))) {
            str = sign === 1 ? '正' : sign === -1 ? '负' : '';
        }
    }
    else if (/cn/.test(option.format)) {
        arr = cn;
        if (!(value.length === 0 && /^0+$/.test(decimal))) {
            str = sign === 1 ? '正' : sign === -1 ? '负' : '';
        }
    }
    else if (/CN/.test(option.format)) {
        arr = CN;
        if (!(value.length === 0 && /^0+$/.test(decimal))) {
            str = sign === 1 ? '正' : sign === -1 ? '負' : '';
        }
    }
    else if (/army/.test(option.format)) {
        arr = army;
    }
    else if (/ARMY/.test(option.format)) {
        arr = ARMY;
    }
    else if (/money/.test(option.format)) {
        arr = cn;
        arr.push('元');
        arr.push('正');
        if (!(value.length === 0 && /^0+$/.test(decimal))) {
            str = sign === 1 ? '正' : sign === -1 ? '负' : '';
        }
    }
    else if (/MONEY/.test(option.format)) {
        arr = CN;
        arr.push('元');
        arr.push('整');
        if (!(value.length === 0 && /^0+$/.test(decimal))) {
            str = sign === 1 ? '正' : sign === -1 ? '負' : '';
        }
    }
    else {
        throw new SyntaxError("[Error] failed to parse format argument");
    }
    if (/^0*$/.test(value)) {
        str += arr[0];
    }
    else if (/(?:(?:army)|(?:ARMY))/.test(option.format)) {
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var item = value_1[_i];
            str += arr[parseInt(item)];
        }
    }
    else {
        if (value.length > 12) {
            value2 = value.slice(0, -12);
            value = value.slice(-12);
            if (value2.length > 12) {
                throw new Error("Just only handle normal numbers.");
            }
        }
        res = numToArray(value, { money: /money/i.test(option.format), spoken: /spoken/i.test(option.format) });
        if (value2.length !== 0) {
            res2 = numToArray(value2, { money: /money/i.test(option.format), spoken: /spoken/i.test(option.format) });
            if (/^normal$/.test(option.base)) {
                var bPoint = -1;
                var wPoint = -1;
                for (var i in res2) {
                    if (res2[i] === 13) {
                        res2[i] = 14;
                        bPoint = parseInt(i) + 1;
                    }
                    else if (res2[i] === 14) {
                        res2[i] = 13;
                        wPoint = parseInt(i) + 1;
                    }
                }
                if (bPoint !== -1) {
                    res2.splice(bPoint, 0, 14);
                }
                if (wPoint !== -1) {
                    res2.splice(wPoint, 0, 14);
                    res2.splice(wPoint, 0, 14);
                }
                if (res2[res2.length - 1] !== 14) {
                    res2.push(13);
                    res2.push(14);
                }
                if (res.indexOf(14) !== -1) {
                    if (res.indexOf(12) === -1 || res.indexOf(12) > res.indexOf(14)) {
                        res2.push(0);
                    }
                }
                else {
                    if (res.length !== 0) {
                        res2.push(0);
                    }
                }
            }
            else if (/^gb$/.test(option.base) || /^tw$/.test(option.base)) {
                for (var i in res2) {
                    if (res2[i] === 13) {
                        res2[i] = 16;
                    }
                    else if (res2[i] === 14) {
                        res2[i] = 17;
                    }
                }
                if (res2.indexOf(16) !== res2.length - 1) {
                    if (/^tw$/.test(option.base)) {
                        res2.push(18);
                    }
                    else {
                        res2.push(15);
                    }
                }
                if (res.indexOf(14) !== -1) {
                    if (res.indexOf(12) === -1 || res.indexOf(12) > res.indexOf(14)) {
                        res2.push(0);
                    }
                }
                else {
                    if (res.length !== 0) {
                        res2.push(0);
                    }
                }
            }
        }
        if (res2.length !== 0) {
            for (var _a = 0, res2_1 = res2; _a < res2_1.length; _a++) {
                var v = res2_1[_a];
                str += arr[v];
            }
        }
        for (var _b = 0, res_1 = res; _b < res_1.length; _b++) {
            var v = res_1[_b];
            str += arr[v];
        }
    }
    if (/money/i.test(option.format)) {
        str += arr[arr.length - 2];
        if (!decimalFlag || /^0*$/.test(decimal)) {
            str += arr[arr.length - 1];
        }
        else {
            var deci = decimalToArray(decimal, true);
            for (var _c = 0, deci_1 = deci; _c < deci_1.length; _c++) {
                var i = deci_1[_c];
                str += i < 0 ? decimalBase[i * -1] : arr[i];
            }
        }
    }
    else {
        if (decimalFlag && !/^0*$/.test(decimal)) {
            str += /CN/.test(option.format) ? '點' : '点';
            var deci = decimalToArray(decimal);
            for (var _d = 0, deci_2 = deci; _d < deci_2.length; _d++) {
                var i = deci_2[_d];
                str += arr[i];
            }
        }
    }
    return str;
}
exports.numToChinanumerals = numToChinanumerals;
//# sourceMappingURL=numToChinanumerals.js.map