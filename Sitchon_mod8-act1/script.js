var full_name = prompt("Enter your full name: ");
var username = prompt("Enter your username: ");
var gender_bool = confirm("What is your gender?\nPress OK if you are male\nPress Cancel if you are female");
var gender = "unspecified;"
if (gender_bool) {gender = "MALE"} else {gender = "FEMALE"};
alert("Your gender has been set to " + gender);
var desc = prompt("Write a brief description of yourself: ");
var birth_year = parseInt(prompt("Enter your birth year: "));
d = new Date;
var current_year = d.getFullYear();
var age = current_year - birth_year;
var pfp_path = "prof.png";
var custom_pfp = confirm("Would you like to use a custom profile picture?");
if (custom_pfp) {
    var pfp_path = prompt("Enter the file path of your custom profile picture: ");
    alert("Profile picture has been updated.");
} else {
    alert("No image has been set.");
}

document.getElementById("fname").innerHTML = full_name;
document.getElementById("username").innerHTML = username;
document.getElementById("gender").innerHTML = gender.charAt(0);
document.getElementById("desc").innerHTML = desc;
document.getElementById("year").innerHTML = birth_year;
document.getElementById("age").innerHTML = age;
document.getElementById("ppic").src = pfp_path;
