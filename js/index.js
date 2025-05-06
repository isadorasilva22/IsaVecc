document.addEventListener("DOMContentLoaded", function () {
    const playBtn = document.getElementById("playPauseBtn");
    const audio = document.getElementById("audioPlayer");

    let isPlaying = false;

    const inicio = 46;
    const fim = 90;
    let trechoTimeout;

    playBtn.addEventListener("click", function () {
        if (isPlaying) {
            audio.pause();
            playBtn.textContent = "▶️";
            clearTimeout(trechoTimeout)
        } else {
            audio.currentTime = inicio;
            audio.play();
            playBtn.textContent = "⏸️";

            const duracao = (fim - inicio) * 1000;
            trechoTimeout = setTimeout(() =>{
              audio.pause();
              playBtn.textContent = "▶️";
              isPlaying = false;
            }, duracao);
        }
        isPlaying = !isPlaying;
    });
});

function verificarSenha() {
    const senha = prompt("(dica: nosso jeito de falar Te amo)  Digite a senha para acessar:");
    const senhaCorreta = "timamo";
  
    if (senha === senhaCorreta) {
      window.location.href = 'view/cartinha.html'; // substitua pela sua URL
    } else {
      alert("Senha incorreta. Acesso negado.");
      // opcional: voltar para a página anterior ou fechar
    }
  };