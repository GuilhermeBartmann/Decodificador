function exibirMensagem(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
  }
  
  function exibirMensagemInicial() {
    exibirMensagem('h1', 'Decodificador');
    exibirMensagem('p', 'Digite o Texto para Decodificação');
  }
  
  exibirMensagemInicial();
  
  function criptografarTexto() {
    const textoEntrada = document.getElementById('textoEntrada').value;
    let textoSaidaCriptografado = '';
  
  
    for (let i = 0; i < textoEntrada.length; i++) {
        let char = textoEntrada[i].toLowerCase(); // Converter para minúsculas para tratar maiúsculas e minúsculas igualmente
  
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
                textoSaidaCriptografado += char; // Mantém outros caracteres inalterados
        }
    }
  
    var x = document.getElementById('imgTexto');
    var y = document.getElementById('textoSaida');

    x.style.visibility = 'hidden'; // Oculta a imagem
    y.style.visibility = 'visible'; // Exibe a caixa de texto

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
  
      x.style.visibility = 'hidden'; // Oculta a imagem
      y.style.visibility = 'visible'; // Exibe a caixa de texto
  
      exibirResultado(textoSaidaDescriptografado);
  }
  
    
  function exibirResultado(resultado) {
    document.getElementById('textoSaida').value = resultado;
  }
  
  function copiarTexto() {
    let textoSaida = document.getElementById("textoSaida");
    textoSaida.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Texto copiado para a área de transferência!");
  }
  