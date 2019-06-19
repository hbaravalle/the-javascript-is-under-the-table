window.onload = () => {


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

  const elBoton = document.querySelector('#toggler');
  const navbar = document.getElementById('elNavBar');
  const titulo1 = document.querySelector('h1');
  const titulo2 = document.querySelector('h2');

  const darkTheme = {
    status: true,
    highlights: '#fff',
    background: '#282C34',
    toggler: function() {
      document.body.style.backgroundColor = this.background;
      navbar.style.color = this.highlights;
      elBoton.style.color = this.background;
      elBoton.style.background = this.highlights;
      titulo1.style.color = this.highlights;
      titulo2.style.color = this.background;
      titulo2.style.webkitTextStrokeColor = this.highlights;
      this.status = true;
      lightTheme.status = false;
      console.log("El tema ha cambiado a su versión Dark")
    }
  }

  const lightTheme = {
    status: false,
    highlights: '#282C34',
    background: '#fff',
    toggler: function() {
      document.body.style.backgroundColor = this.background;
      navbar.style.color = this.highlights;
      elBoton.style.color = this.background;
      elBoton.style.background = this.highlights;
      titulo1.style.color = this.highlights;
      titulo2.style.color = this.background;
      titulo2.style.webkitTextStrokeColor = this.highlights;
      this.status = true;
      darkTheme.status = false;
      console.log("El tema ha cambiado a su versión Light")
    }
  }

  // Por defecto arranca con el darkTheme
  darkTheme.toggler();

  elBoton.addEventListener('click', () => {
    if(darkTheme.status) {
      lightTheme.toggler();
    } else {
      darkTheme.toggler();
    }
  })



}
