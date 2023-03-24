var num1 = 0, num2 = 0, num3 = 0;
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function randomize() {
    num1 = Math.round(Math.random() * 20);
    num2 = Math.round(Math.random() * 20);
    num3 = Math.round(Math.random() * 20);
    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;
    document.getElementById("num3").innerHTML = num3;
    document.getElementById("ticketdiv").style.display = "block"
    document.getElementById("ticketnum").innerHTML = alphabet.charAt(num1 + 1) + Math.max(num1, num2, num3);
    waithrs = Math.floor((num2 * num3) / 60);
    waitmins = (num2 * num3) % 60;
    document.getElementById("waittime").innerHTML = "Your ticket will be resolved in " + waithrs + " hr " + waitmins + " min."
}