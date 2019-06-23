define("interestdashing.AppSourceCallback", ["require", "exports"], function (require, exports) {
    "use strict";
    var appSourceCallback = {
        cleared: function (repo) {
            console.log("CLEARED");
            document.body.style.color = "black";
        },
        fetched: function (repo) {
            console.log("FETCHED");
            document.body.style.color = document.body.style.color === "yellow" ? "blue" : "yellow";
        },
        run: function (repo) {
            console.log("RUNNING");
            document.body.style.color = "green";
        },
    };
    return appSourceCallback;
});
