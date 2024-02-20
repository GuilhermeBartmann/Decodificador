function botaoModoEscuro() {
    var body = document.body;
    body.classList.toggle('dark-mode');
}

function criptografarTexto() {
    const textoEntrada = document.getElementById('textoEntrada').value;
    let textoSaidaCriptografado = '';

    for (let i = 0; i < textoEntrada.length; i++) {
        let char = textoEntrada[i].toLowerCase(); // Converter tudo para letra minúscula
        switch (char) {
            case 'e':
                textoSaidaCriptografado += 'enter';
                break;
            case 'i':
                textoSaidaCriptografado += 'imes';
                break;
            case 'a':
                textoSaidaCriptografado += 'ai';
                break;
            case 'o':
                textoSaidaCriptografado += 'ober';
                break;
            case 'u':
                textoSaidaCriptografado += 'ufat';
                break;
            default:
                textoSaidaCriptografado += char; 
        }
    }

    var x = document.getElementById('imgTexto');
    var y = document.getElementById('textoSaida');
    var z = document.getElementById('botaoCopiar');
    var w = document.getElementById('mensagemSemTexto');
    var o = document.getElementById('mensagemSemText');

    x.style.visibility = 'hidden'; 
    y.style.visibility = 'visible';
    z.style.visibility = 'visible';
    w.style.visibility = 'hidden';
    o.style.visibility = 'hidden';

    exibirResultado(textoSaidaCriptografado);
}

function descriptografarTexto() {
    const textoCriptografado = document.getElementById('textoEntrada').value.toLowerCase();
    let textoSaidaDescriptografado = '';

    for (let i = 0; i < textoCriptografado.length; i++) {
        if (textoCriptografado.substring(i, i + 5) === 'enter') {
            textoSaidaDescriptografado += 'e';
            i += 4;
        } else if (textoCriptografado.substring(i, i + 4) === 'imes') {
            textoSaidaDescriptografado += 'i';
            i += 3;
        } else if (textoCriptografado.substring(i, i + 2) === 'ai') {
            textoSaidaDescriptografado += 'a';
            i += 1;
        } else if (textoCriptografado.substring(i, i + 4) === 'ober') {
            textoSaidaDescriptografado += 'o';
            i += 3;
        } else if (textoCriptografado.substring(i, i + 4) === 'ufat') {
            textoSaidaDescriptografado += 'u';
            i += 3;
        } else {
            textoSaidaDescriptografado += textoCriptografado[i];
        }
    }

    var x = document.getElementById('imgTexto');
    var y = document.getElementById('textoSaida');
    var z = document.getElementById('botaoCopiar');
    var w = document.getElementById('mensagemSemTexto');
    var o = document.getElementById('mensagemSemText');

    x.style.visibility = 'hidden'; 
    y.style.visibility = 'visible'; 
    z.style.visibility = 'visible';
    w.style.visibility = 'hidden';
    o.style.visibility = 'hidden';

    exibirResultado(textoSaidaDescriptografado);
}
  
function exibirResultado(resultado) {
    document.getElementById('textoSaida').value = resultado;
}
  
function copiarTexto() {
    let textoSaida = document.getElementById("textoSaida").value;
    navigator.clipboard.writeText(textoSaida)
        .then(() => {
            console.log('Texto copiado para a área de transferência.');
            alert("Texto copiado para a área de transferência!");
        })
        .catch(err => {
            console.error('Erro ao copiar texto para a área de transferência: ', err);
            alert("Ocorreu um erro ao copiar o texto para a área de transferência.");
        });
}
