var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var output = document.getElementById("output");
var result = 0;
var resword = "result"

function calcResult(op) {
    switch(op) {
        case 1:
            result = parseInt(text1.value) + parseInt(text2.value);
            resword = "sum";
            break;
        case 2:
            result = parseInt(text1.value) - parseInt(text2.value);
            resword = "difference";
            break;
        case 3:
            result = parseInt(text1.value) * parseInt(text2.value);
            resword = "product";
            break;
        case 4:
            result = parseInt(text1.value) / parseInt(text2.value);
            resword = "quotient";
            break;
        case 5:
            result = parseInt(text1.value) % parseInt(text2.value);
            resword = "remainder";
    }
    output.innerHTML = "The " + resword + " of " + text1.value + " and " + text2.value + " is " + result;
}