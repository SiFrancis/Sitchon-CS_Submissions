var k = 1;
var text3 = "";
var cd = 2;
var cd2 = 1;

function forloop() {
    for(var count = 0; count <= 12; count++) {
        if (count == 12) {
            text3 = text3 + (k).toString()
        } else {
            text3 = text3 + (k).toString() + ", ";
        }
        k += cd;
        cd += cd2;
        cd2 = cd2 << 1;
    }
    document.getElementById("output").innerHTML = text3;
}

//dili nako ni gi google btw