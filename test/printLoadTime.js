define("printLoadTime", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var currentTime = Date.now();
    var printLoadTime = (function () {
        function printLoadTime() {
        }
        printLoadTime.prototype.print = function () {
            console.log(currentTime);
        };
        return printLoadTime;
    }());
    exports.printLoadTime = printLoadTime;
});
