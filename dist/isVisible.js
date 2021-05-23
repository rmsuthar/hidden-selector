"use strict";
var isVisible = /** @class */ (function () {
    function isVisible() {
    }
    isVisible.prototype.selector = function (el) {
        var _a, _b, _c;
        isVisible.elm = document.querySelector(el);
        var computedStyle = window.getComputedStyle(isVisible.elm);
        return !(((_a = isVisible.elm) === null || _a === void 0 ? void 0 : _a.offsetHeight) || ((_b = isVisible.elm) === null || _b === void 0 ? void 0 : _b.offsetWidth) || ((_c = isVisible.elm) === null || _c === void 0 ? void 0 : _c.getClientRects().length)) || (computedStyle.visibility == "hidden" || computedStyle.display == "none");
    };
    return isVisible;
}());
