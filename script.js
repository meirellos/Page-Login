//Função de validação
function Enviar() {
  //Pegando o valor do nome pelos names
  var nome = document.getElementById("name");
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  if (nome.value == "") {
    alert("Nome não informado.");
    nome.focus();
  }

  if (email.value == "") {
    alert("Email não informado.");
    email.focus();
  }

  if (password.value == "") {
    alert("Senha não informada.");
    password.focus();
  } else {
    alert("Cadastro realizado com sucesso!");
  }
}
