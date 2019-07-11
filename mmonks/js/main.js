window.onload = function() {

  // Instanciamos una imagen...
  const laImagen = new Image();

  // ...y le pasamos como "src" (source) la ruta de la imagen.
  laImagen.src = './img/background.jpg';

  // Obtenemos el ancho de la imagen y lo parseamos para obtener un número
  let anchoOriginalImagen = parseInt(laImagen.width);
  let altoOriginalImagen = parseInt(laImagen.height);

  // Capturamos los elementos del DOM que vamos a manipular
  let main = document.querySelector('main');
  let flechaIzquierda = document.querySelector('#buttonLeft');
  let flechaDerecha = document.querySelector('#buttonRight');
  let listaDeSlides = document.querySelectorAll('.inner-slide');
  let cantidadDeSlides = listaDeSlides.length;
  console.log(cantidadDeSlides);

  // Creamos algunas funciones que nos van a servir para calcular...
    // 1. El ancho actual de la imagen teniendo en cuenta que queremos mantener el aspecto (ratio) de la imagen sin importar la altura de la ventana,
    // 2. La cantidad de pixeles que se va a desplazar el background cuando hagamos click en las flechitas.
  let anchoResponsive = function() {
    return (window.innerHeight * anchoOriginalImagen) / altoOriginalImagen;
  };

  let desplazamientoBackground = function() {
    return (anchoResponsive() - window.innerWidth) / 7;
  };

  // Creamos un índice que nos diga en que posición del slider estamos
  let indice = 1;

  // Capturamos el evento de click de la flechita izquierda
  buttonLeft.addEventListener('click', function() {
    let mainStyles = getComputedStyle(main);
    let actualPosition = parseInt(mainStyles.backgroundPositionX);

    if(indice > 1) {
      indice--;
      main.style.backgroundPositionX = `${actualPosition + desplazamientoBackground()}px`;
      console.log('<<<<<<<< Izquierda', indice);
    } else if (indice === 2){
      main.style.backgroundPositionX = 'left';
      console.log("Imagen en posición inicial");
    }
  });

  // Capturamos el evento de click de la flechita derecha
  buttonRight.addEventListener('click', function() {
    let mainStyles = getComputedStyle(main);
    let actualPosition = parseInt(mainStyles.backgroundPositionX);

    if (indice >= 1 && indice < cantidadDeSlides) {
      indice++;
      main.style.backgroundPositionX = `${actualPosition - desplazamientoBackground()}px`;
      console.log('Derecha >>>>>>>>', indice);
      console.log(`Posicion actual BG: ${actualPosition - desplazamientoBackground()}`);
    }
    else if (indice === cantidadDeSlides) {
      indice++;
      main.style.backgroundPositionX = 'right';
      console.log("That's all folks!");
    }
    else if (indice === cantidadDeSlides + 1) {
      console.log("Llegaste al final, ahora tendria que aparecer el fondo negro")
    }
  });
}
