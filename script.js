const btn = document.getElementById('button');
const pswd = document.getElementById('password');
const pswdConfirm = document.getElementById('password-confirm');
const errorMessage = document.getElementById("error-message");


function checkPassword() {
    if(pswd.value !== pswdConfirm.value) {
        errorMessage.classList.add("display-error");
        pswd.classList.add("error");
        pswdConfirm.classList.add("error");
    } else {
        errorMessage.classList.remove("display-error");
        pswd.classList.remove("error");
        pswdConfirm.classList.remove("error");
    } 
}

btn.addEventListener("click", () => {
    event.preventDefault();
    checkPassword()
});