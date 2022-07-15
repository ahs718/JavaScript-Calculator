// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}

// This function display values
function display(value) {
    document.getElementById("result").value += value;
}

// First Row
document.getElementById("one-btn").addEventListener("click", () => {
    display("1");
});

document.getElementById("two-btn").addEventListener("click", () => {
    display("2");
});

document.getElementById("three-btn").addEventListener("click", () => {
    display("3");
});

document.getElementById("divide-btn").addEventListener("click", () => {
    display("/");
});

// Second row
document.getElementById("four-btn").addEventListener("click", () => {
    display("4");
});

document.getElementById("five-btn").addEventListener("click", () => {
    display("5");
});

document.getElementById("six-btn").addEventListener("click", () => {
    display("6");
});

document.getElementById("minus-btn").addEventListener("click", () => {
    display("-");
});

// Third row
document.getElementById("seven-btn").addEventListener("click", () => {
    display("7");
});

document.getElementById("eight-btn").addEventListener("click", () => {
    display("8");
});

document.getElementById("nine-btn").addEventListener("click", () => {
    display("9");
});

document.getElementById("plus-btn").addEventListener("click", () => {
    display("+");
});

// Fourth row
document.getElementById("dec-btn").addEventListener("click", () => {
    display(".");
});

document.getElementById("zero-btn").addEventListener("click", () => {
    display("0");
});

document.getElementById("multiply-btn").addEventListener("click", () => {
    display("*");
});

function result() {
    var p = document.getElementById("result").value;
    var q = math.evaluate(p);
    document.getElementById("result").value = q;
}

// Get calculation result using equals button
document.getElementById("equals-btn").addEventListener("click", () => {
    result();
});

// Get calculation result using enter key
document.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        result();
    }
});
