//Função de validação
function Enviar() {
  //Pegando o valor do nome pelos names
  var nome = document.getElementById("name");
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  //Se não for preenchido retorne isto:
  if (nome.value == "") {
    alert("Nome não informado.");
    nome.focus();
    return false;
  }

  if (email.value == "") {
    alert("Email não informado.");
    email.focus();
    return false;
  }

  if (password.value == "") {
    alert("Senha não informada.");
    password.focus();
    return false;
  }
  //Se for preenchido, conclua.
  else {
    alert("Cadastro realizado com sucesso!");
  }
}
