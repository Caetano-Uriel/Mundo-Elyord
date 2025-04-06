document.getElementById("btn-personagens").addEventListener("click", function (e) {
  e.preventDefault(); 
  document.body.classList.add("fade-out"); 

  setTimeout(() => {
    window.location.href = "../personagens//index.html"; 
  }, 600); // Aguarda a duração da transição antes de mudar de página
});
