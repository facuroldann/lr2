const btnSingnIn = document.getElementById("sign-in"),
      btnSingnup = document.getElementById("sign-up"),
      formRegister = document.querySelector(".register"),
      formLogin = document.querySelector(".login");



btnSingnIn.addEventListener("click", e => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide");
})

btnSingnup.addEventListener("click", e => {
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide");
})


