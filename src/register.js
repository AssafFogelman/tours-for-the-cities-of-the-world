import { User } from "./models/User.model.js";
window.addEventListener("load", () => {
    let registerBtn = document.getElementById("registerBtn");
    if (registerBtn) {
        registerBtn.addEventListener("click", () => {
            handleRegisterBtnClick();
        });
    }
});
const handleRegisterBtnClick = () => {
    let nameRegex = new RegExp(`^[A-Z][a-z -]{2,50}$`);
    let lastnameRegex = new RegExp(`[a-zA-Z0-9]`);
    let emailRegex = new RegExp(`\\S+@\\S+\\.\\S+`);
    let passwordRegex = new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,20}$`);
    let name = document.getElementById("name");
    let lname = document.getElementById("lname");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    if (name && lname && email && password) {
        if (nameRegex.test(name.value) &&
            lastnameRegex.test(lname.value) &&
            emailRegex.test(email.value) &&
            passwordRegex.test(password.value)) {
            let user = new User(name.value, lname.value, email.value, password.value);
            let userJson = localStorage.getItem("users");
            if (userJson) {
                let usersArr = JSON.parse(userJson);
                let userItem = usersArr.find((item) => item.email === user.email);
                if (userItem) {
                    console.log("email alreay exists, please login");
                }
                else {
                    usersArr = [...usersArr, user];
                    localStorage.setItem("users", JSON.stringify(usersArr));
                }
            }
            else {
                localStorage.setItem("users", JSON.stringify([user]));
            }
        }
    }
};
function validateEmail(email) {
    let at = email.indexOf("@");
    let dot = email.lastIndexOf(".");
    return (email.length > 0 &&
        at > 0 &&
        dot > at + 1 &&
        dot < email.length &&
        email[at + 1] !== "." &&
        email.indexOf(" ") === -1 &&
        email.indexOf("..") === -1);
}
function assert(a, b) {
    return a == b;
}
