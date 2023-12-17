// task calculator
function calculator(a, b, o) {
    if (o == "+") {
        console.log(a + b)
    } else if (o == "-") {
        console.log(a - b)
    } else if (o == "*") {
        console.log(a * b);
    } else if (o == "/") {
        console.log(a / b);
    } else {
        console.log("Error")
    }
}
//  calculator(1,10,"/");


// Tast  Gas Station or filling Station
//85 = 7 lE for leter, 90 = 8.25 lE for leter,92 = 9.25 lE for leter
function gasstation(l, v) {
    if (v == 85) {
        console.log(l * 7)
    } else if (v == 90) {
        console.log(l * 8.25)
    } else if (v == 92) {
        console.log(l * 9.25)
    }
}
// gasstation(5,90);

//Tast array
// var  group = ['marco', 'ehab','farouk','mourad']
// for (var x = 0; x < group.length; x++) {
//     // console.log(group[x]);

// }
//Task calculater

function cal() {
    var a = document.getElementById('x').value;
    var b = document.getElementById('y').value;
    var o = document.getElementById('o').value;

    if (o == '+') {
        console.log(a + b);
        var c = a + b;
        document.getElementById('res').innerHTML = c;
    } else if (o == '-') {
        document.getElementById('res').innerHTML = a - b;
        console.log(a - b);
    } else if (o == '*') {
        document.getElementById('res').innerHTML = a * b;
        console.log(a * b);
    } else if (o == '/') {
        document.getElementById('res').innerHTML = a / b;
        console.log(a / b);
    } else {
        console.log("alooooooooooooo")
    }
}


//Task Gas Station
console.log(80 * 2);

function gasstation2() {
    var leter = document.getElementById('leter').value;
    var type = document.getElementById('type').value;
    if (type == "80") {
        document.getElementById('le').innerHTML = 7 * leter;
    } else if (type == "90") {
        document.getElementById('le').innerHTML = 8.25 * leter;
    } else if (type == "92") {
        document.getElementById('le').innerHTML = 9.25 * leter;
    }

}


// Task color 


function changecolor() {
    var c = document.getElementById('color').value;
    document.getElementById('test').style.backgroundColor = c;
}


// Task test number

function jn() {
    var test = document.getElementById('t').value;
    //    parseIint(A)
    var c;
    if (parseInt(test) == test || test == "") {

        c = "OK";
    } else {
        c = "Try Again";
    }
    document.getElementById('show').innerHTML = c;
}


// Task Color
function color(x) {

    // alert("aloooo")
    document.body.style.backgroundColor = x;

}


// Task onScroll

window.onscroll = function(event) {
    if (window.scrollY > 200) {
        document.getElementById('t').classList.add("red")
    }
}

//Task about attribute

var doc = document.getElementById("men");
var att = doc.getAttribute("att");
console.log(att)

for (var x = 1; x <= att; x++) {
    document.getElementById("men").innerHTML += x + "<br>";

}

// Task JQ
$("#btt").click(function() {
    // $("#ww").animate({ width: '400px' }, 3000);
    $("#ww").fadeOut(3000);


})