window.onload = function() {

  const laImagen = new Image();
  laImagen.src = './img/background.jpg';
  let anchoTotalImagen = parseInt(laImagen.width);

  let main = document.querySelector('main');
  let flechaIzquierda = document.querySelector('#buttonLeft');
  let flechaDerecha = document.querySelector('#buttonRight');
  let listaDeSlides = document.querySelectorAll('.inner-slide');
  let cantidadDeSlides = listaDeSlides.length;

  let indice = 1;

  if (indice == 1) {
    buttonLeft.classList.add('disabled');
  }

  buttonLeft.addEventListener('click', function() {
    let mainStyles = getComputedStyle(main);
    let actualPosition = parseInt(mainStyles.backgroundPositionX);

    if(indice > 1) {
      indice--;
      main.style.backgroundPositionX = actualPosition + unOctavoDeLaImagen + 'px';
      console.log('<<<<<<<< Izquierda');
    } else {
      console.log("Imagen en posición inicial");
    }
  });

  buttonRight.addEventListener('click', function() {
    let mainStyles = getComputedStyle(main);
    let actualPosition = parseInt(mainStyles.backgroundPositionX);

    if (indice >= 1 && indice < 8) {
      indice++;
      console.log(indice)
      main.style.backgroundPositionX = actualPosition - unOctavoDeLaImagen + 'px';
      console.log('Derecha >>>>>>>>');
    } else if (indice === 8) {
      indice++;
      main.style.backgroundPositionX = "right";
    } else {

    }
  });

}
