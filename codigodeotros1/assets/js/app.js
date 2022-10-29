// el codigo consulta una api de usuarios e imprime en el html los datos.
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.getElementById('name');
const $b = document.getElementById('blog');
// const $l = document.getElementById('location'); Inhabiite esta variable ya que no existe este elemento en el html 
/* Cambie los querySelector por getElementById */
const displayUser = async (username) => {
  $n.textContent = 'cargando...';
// agregue bloques de try catch
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json()
// se uso el metodo json para guardar los datos
    console.log(data);
    $n.textContent = `${data.name}`;
// se modificaron las comillas para poder imprimir los datos
    $b.textContent = `${data.blog}`;
//    $l.textContent = `${data.location}`; Inhabilite esta variable nuevamente
  }
  catch(e){
    handleError(e)
  }
}
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
}
displayUser('stolinski').catch(handleError);