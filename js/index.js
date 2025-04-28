document.addEventListener("DOMContentLoaded", function () {
    const playBtn = document.getElementById("playPauseBtn");
    const audio = document.getElementById("audioPlayer");

    let isPlaying = false;

    playBtn.addEventListener("click", function () {
        if (isPlaying) {
            audio.pause();
            playBtn.textContent = "▶️";
        } else {
            audio.play();
            playBtn.textContent = "⏸️";
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