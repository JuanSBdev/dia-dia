
let btn_amigos = $('#boton');
let btn_buscar = $('#search');
let btn_del = $('#delete');
let input = $('#input');
let input_b = $('#inputDelete');
let lista = $('#lista');



  $( btn_amigos ).on( "click", function() {
    fetch(`http://localhost:5000/amigos/`)
    .then(response => response.json())
    .then(data =>{ 
      lista.html('');
      for (let i = 0; i < data.length; i++) {
        let div = document.createElement('div');
        console.log(data[i]);
        div.style.border = '1px solid';
        div.style.margin = '3%';
        div.style.width = '25%';
        //agregar container para acomodar los divs
        let name = document.createElement('h3');
        name.innerText = data[i].name;
        let age = document.createElement('h4');
        age.innerText = data[i].age;
        div.appendChild(name);
        div.appendChild(age);
        lista.append(div);
  }
   
        })
    .catch(error => console.error(error));

  });
  ;
     
  $( btn_buscar ).on( "click", function() {
      let id =  "";
      let valorInput = $(input).val();
      id = valorInput;
      fetch(`http://localhost:5000/amigos/${id} `)
      .then( response => response.json()  )
      .then( data => {
        

        let div = document.createElement('div');
        div.style.border = '1px solid';
        div.style.margin = '3%';
        div.style.width = '25%';
        let name = document.createElement('h3');
        name.innerText = data.name;
        let age = document.createElement('h4');
        age.innerText = data.age;
        div.appendChild(name);
        div.appendChild(age);
        document.body.appendChild(div);        


    } )
    .catch(error => console.log(error))
  });
// delete
$( btn_del ).on( "click", function() {
    let id = null;
      let valorInput = $(input_b).val();
      id = valorInput;
    fetch(`http://localhost:5000/amigos/${id}`, {method: 'DELETE'})

    .then(data =>  alert(`Eliminaste el amigo ${data.name} ${id}`))
    .catch(error => console.error(error))
})










