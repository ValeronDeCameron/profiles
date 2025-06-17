const loginInput = document.getElementById("login");
const reg_btn = document.getElementById("reg_btn");
const form_reg = document.getElementById("form_reg");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const re_passwordInput = document.getElementById("re_password");
const success_modal = document.getElementById("success_modal");
const wrong_modal = document.getElementById("wrong_modal");
const ok_btn = document.querySelectorAll(".OK_btn")

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
    .then(res => {
      return res.json()
      .then(json => {
      if (!res.ok) 
        throw json
      else 
        return json
      })
    })
    .then(data => {
      console.log(data)
      success_modal.classList.remove('none')
    })
    .catch(err => {
      console.log(err.message)
      wrong_modal.classList.remove('none');
    });
  }
})

ok_btn.forEach(btn => {
  btn.addEventListener('click', () => {
    if (!success_modal.classList.contains('none')) 
      success_modal.classList.add('none')
    else if (!wrong_modal.classList.contains('none'))
      wrong_modal.classList.add('none')
    form_reg.reset()
  })
})
