const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    let username = loginForm.username.value;
    let password = loginForm.password.value;

    function Redirect() {
        // document.getElementById('loader').style.display = "inline";
        window.location = "/abonament.html";
     } 
     function showDiv() {
        document.getElementById('loader').style.display = "block";
     }

    if (username == "teo" && password == "teo") {
        // alert("You have successfully logged in.");
        // location.reload();
        Redirect();
    } else {
        alert("Try again, wrong username or password.");
        location.reload();
    }
}
)

// console.log(users.users)
