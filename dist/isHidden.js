"use strict";
var isHidden = /** @class */ (function () {
    function isHidden() {
    }
    isHidden.prototype.selector = function (el) {
        var _a, _b, _c;
        isHidden.elm = document.querySelector(el);
        var computedStyle = window.getComputedStyle(isHidden.elm);
        return !(((_a = isHidden.elm) === null || _a === void 0 ? void 0 : _a.offsetHeight) || ((_b = isHidden.elm) === null || _b === void 0 ? void 0 : _b.offsetWidth) || ((_c = isHidden.elm) === null || _c === void 0 ? void 0 : _c.getClientRects().length)) || (computedStyle.visibility == "hidden" || computedStyle.display == "none" || parseInt(computedStyle.opacity) <= 0 || parseInt(computedStyle.width) <= 0 || parseInt(computedStyle.height) <= 0);
    };
    return isHidden;
}());
