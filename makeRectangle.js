var colors = ["yellow", "white", "black", "red", "green", "blue", "brown", "orange"];
var makeRect = function () {
    var x = Math.random() * 1000;
    var y = Math.random() * 1000

    var width = 100 + Math.random() * 500;
    var height = 100 + Math.random() * 500;

    var rect = document.createElement("div");
    rect.style.position = "absolute";
    rect.style.left = x + "px";
    rect.style.top = y + "px";
    rect.style.width = width + "px";
    rect.style.height = height + "px";
    rect.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    rect.addEventListener("click", function () {
        makeRect();
    });

    document.body.appendChild(rect);
    console.log("Added a rectangle");
};

makeRect();