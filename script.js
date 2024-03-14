alert("Tá na hora de viajar, ein?")
function mouseOver() {
    document.getElementById("logo").innerHTML = "Explorando Juntos, Destinos Inesquecíveis!";
}

function mouseOut() {
    document.getElementById("logo").innerHTML = "DC";
}

function toggleMenu() {
  const navbarMenu = document.querySelector('.navbar-menu');
  navbarMenu.classList.toggle('show');
}

function onClick(){
  alert("Agora é só checar na caixa de entrada do email!")
}

