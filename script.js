async function buscaEndereco(cep) {
    var mesagemErro = document.getElementById('erro');
    mesagemErro.innerHTML = "";
    try {
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existente!');
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;
        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {
        mesagemErro.innerHTML =`<p> CEP inválido. Tente novamente!</p>`
    console.log (erro)
    }
} 

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco (cep.value));       // clica fora

