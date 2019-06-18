function debounce(unaFuncion, tiempo) {
  let timeoutId;
  return function() {
    if(timeoutId) {
      clearTimeout(timeoutId);
    }
    const context = this;
    const args = arguments;
    timeoutId = setTimeout(function() {
      unaFuncion.apply(context, args);
    }, tiempo);
  }
}

function scrollingMagic() {
  let yPos = window.pageYOffset;
  console.log(yPos);

  const smElements = {
    smLogo: ['smLogo', 500],
    smNavBar: ['smNavBar', 500]
  }

  for(let prop in smElements) {
    let theElement = document.getElementById(smElements[prop][0]);
    if(yPos > smElements[prop][1]) {
      theElement.classList.add('scrollingMagic');
    } else {
      theElement.classList.remove('scrollingMagic');
    }
  }
}

const scrollingMagicDebounced = debounce(scrollingMagic, 100);

window.addEventListener('scroll', () => {
  scrollingMagicDebounced();
});
