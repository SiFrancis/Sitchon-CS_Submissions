function submitLogin() {
    var formname = document.forms["loginform"]["username"].value;
    var formpass = document.forms["loginform"]["password"].value;
    var needed = "";
    if ((formname == null || formname == "") || (formpass == null || formpass == "")) {
        document.getElementById("logincheck").style.display = "block";
    }
    if (formpass == null || formpass == "") {
        needed = "password";
        if (formname == null || formname == "") {
            needed = "username and password";
        }
    }
    if (formname == null || formname == "") {
        needed = "username";
        if (formpass == null || formpass == "") {
            needed = "username and password";
        }
    }
    
    document.getElementById("logincheck").innerHTML = ("Please enter your " + needed + ".");
}