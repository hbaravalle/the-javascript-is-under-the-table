window.onload = function() {
  let selectProvincias = document.querySelector('#provincias');
  console.log(selectProvincias);
  let selectMunicipios = document.querySelector('#municipios');
  console.log(selectMunicipios);
  let elFormulario = document.forms[0];
  console.log(elFormulario);
  console.log(elFormulario.elements);

  function cargarProvincias() {
    fetch('https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre')
    .then(function(respuestaAPI) {
      return respuestaAPI.json();
    })
    .then(function(respuestaProvincias) {
      console.log(respuestaProvincias);
      selectProvincias.innerHTML = `
        <option value="" disabled selected>Seleccione una provincia...</option>
      `;
      for(let unaProvincia of respuestaProvincias.provincias) {
        let optionProvincia = document.createElement('option');
        optionProvincia.setAttribute('value', unaProvincia.id);
        optionProvincia.innerHTML = unaProvincia.nombre;
        selectProvincias.append(optionProvincia);
      }
    })
  }

  function cargarMunicipios(idMunicipio) {
    fetch(' https://apis.datos.gob.ar/georef/api/municipios?provincia='+idMunicipio+'&campos=id,nombre&max=100')
    .then(function(respuestaAPI) {
      return respuestaAPI.json();
    })
    .then(function(respuestaMunicipios) {
      selectMunicipios.innerHTML = `
        <option value="" disabled selected>Seleccione un municipio...</option>
      `;
      for(let unMunicipio of respuestaMunicipios.municipios) {
        let optionMunicipio = document.createElement('option');
        optionMunicipio.setAttribute('value', unMunicipio.id);
        optionMunicipio.innerHTML = unMunicipio.nombre;
        selectMunicipios.append(optionMunicipio)
      }
    })
  }

  cargarProvincias();
  selectProvincias.addEventListener('change', function() {
    let provinciaSeleccionada = selectProvincias.value;
    cargarMunicipios(provinciaSeleccionada);
  })

}
