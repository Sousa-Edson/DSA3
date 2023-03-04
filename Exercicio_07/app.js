var hora = new Date().getHours();
        var textoResposta = "";

        var nome = document.getElementById("txtNome");
        var idade = document.getElementById("txtIdade")
        var resp = document.getElementById("resposta")
        console.log(nome.length)
        console.log(idade.length)
        function chamaConsulta() {
            if (nome.value.length != 0 && idade.value.length != 0) {

                textoResposta = horaAtual() + " ! <b>" + nome.value.toUpperCase() + "</b> <br/> Você tem <b>" + idade.value + "</b> anos." +
                    " <br/> Você é considerado " + statusIdade();

            } else {
                textoResposta = "Preencha as informações,\nNão deixe em branco!";
            }
            resp.innerHTML = textoResposta;
            console.log(textoResposta)
        }

        function horaAtual() {

            if (hora >= 0 && hora <= 11) {
                return "Bom dia"
            }
            else if (hora >= 12 && hora <= 18) {
                return "Boa tarde"
            }
            else if (hora >= 8 && hora <= 23) {
                return "Boa noite"
            }

        }
        function statusIdade() {
            if (idade.value >= 0 && idade.value <= 9) {
                return "criança"
            }
            else if (idade.value >= 10 && idade.value <= 20) {
                return "jovem"
            }
            else if (idade.value >= 21 && idade.value <= 64) {
                return "adulto"
            } else {
                return "idoso"
            }

        }
        function limpar() {
            textoResposta = " "; 
            resp.innerHTML = textoResposta;
            console.log(textoResposta)
            console.log("limpar")

        }