const superJson = null;
fetch('https://api.themoviedb.org/3/movie/top_rated?page=1&language=en-US&api_key=81b468865772aad355fffbae68ca1383') // Call the fetch function passing the url of the API as a parameter
.then(function(response) {
    return response.json()
})
.then(function(elJson) {


  console.log(elJson.results);
  let jsonFinal = elJson.results;
  let lista = document.querySelector('#listaPeliculas');

  for(var i = 0; i < jsonFinal.length; i++) {
    console.log(jsonFinal[i]);
    let li = `<div>${jsonFinal[i].title}</div>`
    lista.innerHTML += li
  }

})
.catch(function() {
  console.log("todo mal");
});
