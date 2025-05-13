document.addEventListener("DOMContentLoaded", function () {
    const playPauseBtn = document.getElementById("playPauseBtn");
    const audioPlayer = document.getElementById("audioPlayer");

    let isPlaying = false;

    const inicio = 46;
    const fim = 90;
    let trechoTimeout;

    playPauseBtn.addEventListener("click", function () {
        if (isPlaying) {
            audioPlayer.pause();
            playPauseBtn.textContent = "▶️";
            clearTimeout(trechoTimeout)
        } else {
            audioPlayer.currentTime = inicio;
            audioPlayer.play();
            playPauseBtn.textContent = "⏸️";

            const duracao = (fim - inicio) * 1000;
            trechoTimeout = setTimeout(() =>{
              audioPlayer.pause();
              playPauseBtn.textContent = "▶️";
              isPlaying = false;
            }, duracao);
        }
        isPlaying = !isPlaying;
    });
});

function verificarSenha() {
    const senha = prompt("(dica: nosso jeito de falar Te amo)  Digite a senha para acessar:");
    const senhaCorreta = "timamoassim";
  
    if (senha === senhaCorreta) {
      window.location.href = 'view/cartinha.html'; // substitua pela sua URL
    } else {
      alert("Senha incorreta. Acesso negado.");
      // opcional: voltar para a página anterior ou fechar
    }
  };