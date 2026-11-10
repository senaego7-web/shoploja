// Contas que podem entrar (você pode adicionar quantas quiser)
const usuarios = [
  { email: "aluno@gmail.com", senha: "1234" },
  { email: "professor@gmail.com", senha: "abcd" }
];

const form = document.getElementById("formLogin");
const erro = document.getElementById("erro");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim().toLowerCase();
  const senha = document.getElementById("senha").value;

  const encontrou = usuarios.find(function (u) {
    return u.email === email && u.senha === senha;
  });

  if (encontrou) {
    erro.textContent = "";
    window.location.hash = "#produtos";
  } else {
    erro.textContent = "E-mail ou senha incorretos.";
  }
});