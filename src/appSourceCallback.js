define("interestdashing.AppSourceCallback", ["require", "exports"], function (require, exports) {
    "use strict";
    var appSourceCallback = {
        cleared: function (repo) {
            console.log("CLEARED");
            document.body.style.backgroundColor = "black";
        },
        fetched: function (repo) {
            console.log("FETCHED");
            document.body.style.backgroundColor = document.body.style.backgroundColor === "yellow" ? "blue" : "yellow";
        },
        run: function (repo) {
            console.log("RUNNING");
            document.body.style.backgroundColor = "purple";
        },
    };
    return appSourceCallback;
});
