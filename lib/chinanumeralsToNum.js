"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chinanumeralsToNum = void 0;
var army = new Map([['洞', '0'], ['幺', '1'], ['两', '2'], ['三', '3'], ['四', '4'], ['五', '5'], ['六', '6'], ['拐', '7'], ['八', '8'], ['钩', '9']]);
var ARMY = new Map([['洞', '0'], ['幺', '1'], ['两', '2'], ['叁', '3'], ['肆', '4'], ['伍', '5'], ['陆', '6'], ['拐', '7'], ['捌', '8'], ['钩', '9']]);
function chinanumeralsToNum(v_str, option) {
    var result = '';
    var dict = new Map();
    if (/(ARMY|army)/.test(option.format)) {
        dict = /army/.test(option.format) ? army : ARMY;
        for (var _i = 0, v_str_1 = v_str; _i < v_str_1.length; _i++) {
            var char = v_str_1[_i];
            result += dict.get(char);
        }
    }
    else if (/(cn|CN)/.test(option.format)) {
    }
    return result;
}
exports.chinanumeralsToNum = chinanumeralsToNum;
//# sourceMappingURL=chinanumeralsToNum.js.map