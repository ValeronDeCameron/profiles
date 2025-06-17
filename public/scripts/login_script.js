const form_login = document.getElementById("form_login");
const loginInput = document.getElementById("login");
const passwordInput = document.getElementById("password");
const success_modal = document.getElementById("success_modal");
const wrong_modal = document.getElementById("wrong_modal");
const ok_btn = document.querySelectorAll(".OK_btn")

form_login.addEventListener("submit", (e) => {
  e.preventDefault();
  const data =
    {
      input: loginInput.value,
      password: passwordInput.value,
    }

  const url = "http://localhost:3000/api/user/login";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
    console.log(data);
    console.log('success');
    success_modal.classList.remove("none");
  })
  .catch(err => {
    console.log(err.message);
    wrong_modal.classList.remove("none");
  })
})

ok_btn.forEach(btn => {
  btn.addEventListener('click', () => {
    if (!success_modal.classList.contains('none'))
      success_modal.classList.add('none')
    else if (!wrong_modal.classList.contains('none'))
      wrong_modal.classList.add('none')
    form_login.reset()
  })
})