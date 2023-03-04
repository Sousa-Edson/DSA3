
var textoResposta = "";

var txtSenha = document.getElementById("txtSenha");
var txtLogin = document.getElementById("txtLogin");
var btnLogin = document.getElementById("btnEnviar");
var resp = document.getElementById("resposta");
var formulario = document.getElementById("formulario");
var acesso = document.getElementById("acesso");

var titulo = document.getElementById("titulo");

acesso.hidden = true;

let tentativa = 3;

const usuario = [
    { login: "edson", senha: "1", permissao: "Administrador" },
    { login: "david", senha: "1", permissao: "Gerente" },
    { login: "ian", senha: "1", permissao: "Analista" },
    { login: "user", senha: "1", permissao: "Analista" }
]

function chamaConsulta() {
    if (txtSenha.value.length != 0 && txtLogin.value.length != 0) {
        textoResposta = " ";
        executaLogin();
    } else {
        textoResposta = "Preencha as informações,<br>Não deixe em branco!";
    }
    resp.innerHTML = textoResposta;
    console.log(textoResposta);
}

var u = "";
function percorrerUsuario() {
    usuario.forEach(usuario => {

        if (usuario.login == txtLogin.value) {
            this.break;
            u = {
                login: usuario.login,
                senha: usuario.senha,
                permissao: usuario.permissao
            }
            // return usuario;
        }
    })
}

function executaLogin() {
    percorrerUsuario();
    if (txtLogin.value == u.login && txtSenha.value == u.senha) {
        acesso.hidden = false;
        formulario.hidden = true;
        textoResposta = "Bem vindo," + u.login[0].toUpperCase() + u.login.substr(1) + ", sua permissão de acesso é " + u.permissao;
        titulo.innerHTML = textoResposta;
    } else {
        tentativa = tentativa - 1;
        console.log("erro: " + tentativa)
        textoResposta = "Usuário ou senha Inválidos!!!<br>Falta(m) " + tentativa + " Tentativa(s)";
        if (tentativa == 0) {
            textoResposta = "Sistema Bloqueado";
            txtLogin.disabled = true;
            txtSenha.disabled = true;
            btnLogin.disabled = true;
        }
        txtLogin.focus();
    }


}
