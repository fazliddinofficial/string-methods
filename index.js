alert("Now email program is working!")
var emailText = prompt("Enter your email shit!");

var email = emailText.slice(0, 3);
var restEmail = emailText.slice(3, -10);
var additon = emailText.slice(-10);

if (additon === "@gmail.com") {
    var star = "*";
    alert(email + star.repeat(restEmail.length) + additon);
}
else {
    console.log("Something went wrong");
}

