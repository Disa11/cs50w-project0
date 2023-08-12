var preloader = document.getElementById("preloader");
const element = document.getElementsByClassName("tagvisibility");

function loader() {
  preloader.style.display = "none";
  document.getElementById('body_id').classList.remove('hidden');

  for (let i = 0; i < element.length; i++) {
    element[i].style.visibility = "visible"
  }
}

window.addEventListener("load", setTimeout(loader, 1000)); //Funcion para mostrar aunque sea un segundo la animacion xd ya que la pagina aun no e smuy pesada