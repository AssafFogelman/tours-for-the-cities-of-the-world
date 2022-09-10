import { User } from "./models/User.model.js";

window.addEventListener("load", () => {
  let registerBtn = document.getElementById("registerBtn");
  if (registerBtn) {
    /* for typescript */ registerBtn.addEventListener("click", () => {
      handleRegisterBtnClick();
    });
  }
});

//the regex need to be in a different file under the folder "validation"

const handleRegisterBtnClick = () => {
  let nameRegex = new RegExp(`^[A-Z][a-z -]{2,50}$`);
  /* 
  ^ - the text can't contain characters before the pattern
  
  {2,50} - range. min,max;
  $ - the text can't contain characters after the pattern
  */
  let lastnameRegex = new RegExp(`[a-zA-Z0-9]`);
  let emailRegex = new RegExp(`\\S+@\\S+\\.\\S+`);
  let passwordRegex = new RegExp(
    `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,20}$`
  );

  let name = document.getElementById("name") as HTMLInputElement;
  let lname = document.getElementById("lname") as HTMLInputElement;
  let email = document.getElementById("email") as HTMLInputElement;
  let password = document.getElementById("password") as HTMLInputElement;
  if (name && lname && email && password) {
    if (
      nameRegex.test(name.value) &&
      lastnameRegex.test(lname.value) &&
      emailRegex.test(email.value) &&
      passwordRegex.test(password.value)
      //we can add here a section in case the input is not valid
    ) {
      let user = new User(name.value, lname.value, email.value, password.value);
      let userJson = localStorage.getItem("users");
      if (userJson) {
        let usersArr = JSON.parse(userJson);
        //looking for email in database
        let userItem = usersArr.find(
          (item: User): boolean => item.email === user.email
        );
        //if email was found in the db, the email already exists so the user needs to pick another email or reset password
        if (userItem) {
          console.log("email alreay exists, please login");
        } else {
          usersArr = [...usersArr, user];
          localStorage.setItem("users", JSON.stringify(usersArr));
          //we set the updated array to the local storage
        }
      } else {
        //local storage is empty. this means that we need to create a new users array
        localStorage.setItem("users", JSON.stringify([user])); //you add the [] to create the array of users with its first user.
      }
    }
  }
};

/* functions bar sent to sift emails */

function validateEmail(email: string) {
  let at = email.indexOf("@");
  let dot = email.lastIndexOf(".");
  return (
    email.length > 0 &&
    at > 0 &&
    dot > at + 1 &&
    dot < email.length &&
    email[at + 1] !== "." &&
    email.indexOf(" ") === -1 &&
    email.indexOf("..") === -1
  );
}

function assert(a: any, b: any) {
  return a == b;
}
