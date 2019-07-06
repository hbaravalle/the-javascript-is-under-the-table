window.onload = function() {
  let containerImages = document.querySelector('.container-images');
  let childrenImages = containerImages.children;
  let colorList = document.querySelector('#colorList');

  function makeColorPicker() {
    for(let i = 0; i < childrenImages.length; i++) {
      let colorBG = childrenImages[i].getAttribute('productcolor');
      let spanElement = document.createElement('span');
      spanElement.style.backgroundColor = colorBG;
      spanElement.setAttribute('pickcolor', colorBG);
      colorList.appendChild(spanElement);
    }
  }

  makeColorPicker();

  let spanList = colorList.children;
  for(let i = 0; i < spanList.length; i++) {
    spanList[i].onclick = function() {
      let selfColor = this.getAttribute('pickcolor');
      let theImage = document.querySelector(`img[productcolor='${selfColor}']`);
      for(let index = 0; index < childrenImages.length; index++) {
        childrenImages[index].style.display = "none";
      }
      theImage.style.display = "block";
    }
  }
}
