// const data =
//   {
//     "login": "clone322",
//     "email": "greedcost32@gmail.com",
//     "password": "123456"
//   }
//
// const url = "http://localhost:3000/api/user";
//
// fetch (url, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(data)
// })
// .then(res => res.json())
// .then(data => console.log('Created user: ', data))
// .catch(err => console.log(err));

const loginInput = document.getElementById("login");
const reg_btn = document.getElementById("reg_btn");
const form_reg = document.getElementById("form_reg");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const re_passwordInput = document.getElementById("re_password");


form_reg.addEventListener("submit", (e) => {
  e.preventDefault();
  if (passwordInput.value !== re_passwordInput.value) {
    console.log('Wrong re_password');
    alert("Passwords don't match");
  }
  else {
    const data =
      {
        login: loginInput.value,
        email: emailInput.value,
        password: passwordInput.value
      }

    const url = "http://localhost:3000/api/user";

    fetch (url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => console.log('Created user: ', data))
    .catch(err => console.log(err));
  }
})
