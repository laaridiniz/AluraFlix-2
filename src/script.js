function adicionarFilme(){
  var filmeFavorito = document.getElementById('filme').value
  var elementoListaFilmes = document.getElementById('listaFilmes')
  elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + '<img src=' + filmeFavorito + '>'
  document.getElementById('filme').value = ''
}

//clicar no banner e ser redirecionado para o trailer no youtube
//armazenamento das imagens e links em listas