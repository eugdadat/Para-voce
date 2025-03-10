
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
  const audio = document.getElementById('background-music');
audio.play(); // Inicia a reprodução
};