var i = 1;
var text = ""

function dowhile() {
    document.getElementById("output").innerHTML = " ";
    do {
        if (i == 25) {
            text = text + (i*2).toString();
        } else {
            text = text + (i*2).toString() + ", ";
        }
        i++
    } while (i <= 25);
    document.getElementById("output").innerHTML = text;
}