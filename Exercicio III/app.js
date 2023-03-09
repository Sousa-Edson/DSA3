var textoResposta = "";

var nome = document.getElementById("txtNome");
var sexo = document.getElementsByName("rbSexo");
var btnEnviar = document.getElementById("btnEnviar");
var btnRelatorio = document.getElementById("btnRelatorio");
var lista = document.getElementById("lista");
// const selectedRadio = document.querySelector("input[name='rbSexo']:checked").value;
function salvarPessoa() {
  console.log(nome.value);

  function getRadioValue() {
    for (var i = 0; i < document.getElementsByName("rbSexo").length; i++) {
      if (document.getElementsByName("rbSexo")[i].checked) {
        return document.getElementsByName("rbSexo")[i].value;
      }
    }
  }
  console.log(getRadioValue());
}
