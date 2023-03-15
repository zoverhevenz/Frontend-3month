// TASK1
// const username = document.querySelector("#username");
// const password = document.querySelector("#password");
// const loginCheck = document.querySelector(".loginCheck");
// const result = document.querySelector(".result");
// const eye = document.querySelector("#eye");

// const usernameRegExp =
//   /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
// const passwordRegExp = /[A-Za-z]\w{7,14}$/;

// username.addEventListener("click", () => {
//   if (usernameRegExp.test(username.value)) {
//     result.innerHTML = "Вход разрешен";
//     result.style.color = "green";
//     username.style.borderColor = "green";
//   } else {
//     result.innerHTML = "Убедитесь в корректности почты или пароля";
//     username.style.borderColor = "red";
//     result.style.color = "red";
//   }
// });

// password.addEventListener("click", () => {
//   if (passwordRegExp.test(password.value)) {
//     password.style.borderColor = "green";
//   } else {
//     password.style.borderColor = "red";
//   }
// });
// TASK2
const block = document.querySelector(".block");
const square = document.querySelector(".square");

const move = () => {
  square.style.left = `${340}px`;
  move();
};
move();
