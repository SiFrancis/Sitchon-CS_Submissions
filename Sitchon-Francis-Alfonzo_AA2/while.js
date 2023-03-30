var j = 1;
var text2 = ""

function whileloop() {
    document.getElementById("output").innerHTML = " ";
    while (j <= 26) {
        if (j == 26) {
            text2 = text2 + ((j*2)-1).toString();
        } else {
            text2 = text2 + ((j*2)-1).toString() + ", ";
        }
        j++
    }
    document.getElementById("output").innerHTML = text2;
}