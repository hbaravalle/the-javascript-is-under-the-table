window.onload = function() {
  const backgroundImage = new Image();
  backgroundImage.src = './img/background.jpg';

  let totalWidth = backgroundImage.width;
  let anEighth = parseInt(totalWidth / 8);

  let main = document.querySelector('main');
  let buttonLeft = document.querySelector('#buttonLeft');
  let buttonRight = document.querySelector('#buttonRight');

  buttonLeft.addEventListener('click', function() {
    let mainStyles = getComputedStyle(main);
    let actualPosition = parseInt(mainStyles.backgroundPositionX);
    if(actualPosition !== 0) {
      main.style.backgroundPositionX = actualPosition + anEighth + 'px';
      console.log('derecha derecha');
    }
  });

  buttonRight.addEventListener('click', function() {
    let mainStyles = getComputedStyle(main);
    let actualPosition = parseInt(mainStyles.backgroundPositionX);
    main.style.backgroundPositionX = actualPosition - anEighth + 'px';
    console.log('izquierda izquierda')
  });

}
