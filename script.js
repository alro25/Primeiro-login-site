document.addEventListener("DOMContentLoaded", () => {
  const imagens = document.querySelectorAll(".carousel img");
  let indice = 0;

  setInterval(() => {
    // Remove a classe "active" da imagem atual
    imagens[indice].classList.remove("active");

    // Vai para a próxima (ou volta ao início)
    indice = (indice + 1) % imagens.length;

    // Mostra a nova imagem
    imagens[indice].classList.add("active");
  }, 4000); // troca a cada 4 segundos
});