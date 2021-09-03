
var a = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
var o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
output();

document.getElementById("submit").addEventListener("click", function () {
    o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    calculation();
    output();
})

// Calculate Output
function calculation() {
    var input = document.getElementById("input").value;
    var input2 = document.getElementById("input2").value;
    input = input - input2;
    document.getElementById("remaining").innerHTML = `Remaining Amount : ${input}`;
    for (var i = 0; i < 12; i++) {
        while (input >= a[i]) {
            input -= a[i];
            o[i]++;
        }
    }
}

function output() {
    for (var i = 0; i < 10; i++) {
        document.getElementById("Id" + i).innerHTML = o[i];
    }
}