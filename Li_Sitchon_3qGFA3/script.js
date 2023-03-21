var num1 = 0, num2 = 0, num3 = 0;
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function randomize() {
    num1 = Math.round(Math.random() * 20);
    num2 = Math.round(Math.random() * 20);
    num3 = Math.round(Math.random() * 20);
    document.getElementById("ticketdiv").style.display = "block"
    document.getElementById("ticketnum").innerHTML = alphabet.charAt(num1 + 1) + Math.max(num1, num2, num3);
}