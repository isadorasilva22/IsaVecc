function abrirDisco(elementoClicado) {
    // Garante que estamos lidando com a div .linha-disco, mesmo se clicarmos em um filho
    const disco = elementoClicado.closest('.linha-disco');
  
    const todosDiscos = document.querySelectorAll('.linha-disco');
  
    // Fecha todos os outros discos e pausa áudios
    todosDiscos.forEach(outro => {
      if (outro !== disco) {
        outro.classList.remove('aberto');
        const audio = outro.querySelector('audio');
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
      }
    });
  
    // Alternar o disco clicado
    const audioAtual = disco.querySelector('audio');
    const estavaAberto = disco.classList.contains('aberto');
  
    if (estavaAberto) {
      disco.classList.remove('aberto');
      if (audioAtual) {
        audioAtual.pause();
        audioAtual.currentTime = 0;
      }
    } else {
      disco.classList.add('aberto');
      if (audioAtual) {
        audioAtual.play();
      }
    }
  }
  