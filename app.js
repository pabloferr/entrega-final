Swal.fire({
    title: "Bienvenido!",
    text: "haz click para ingresar!",
    icon: "success"
  });

const divContenido1 = document.getElementById ("contenedor1")
console.log(divContenido1)

const titulo = document.getElementsByClassName ("titulo")
console.log(titulo)

const divContenido = document.getElementById ("contenedor")
console.log (divContenido) 

let parrafos = document.getElementsByClassName ("primerparrafo")
console.log(parrafos [0].innerHTML);
console.log(parrafos [1].innerHTML);
console.log(parrafos [2].innerHTML);


const divCarts = document.getElementById ("cartitas")
console.log (divCarts) 


const cartas = [
    {
        id:1,
        producto: "pleystation 5",
        precios: "$300.000",
        cuotas: "6 cuotas sin interes de $50.000",
        img: "./img/playstation.jpg"
    },
    {
        id:2,
        producto: "teclado gamer",
        precios: "$25.000",
        cuotas: "4 cuotas sin interes de $6.250",
        img: "./img/tecladogamer.jpg"
    },
    {
        id:3,
        producto: "silla gamer",
        precios: "$120.000",
        cuotas: "6 cuotas sin interes de $20.000",
        img: "./img/sillagamer.jpg",
    }
]   

cartas.forEach((cartas)=>{
    let contenedorCars = document.createElement ("div")
    contenedorCars.innerHTML = `<section class= "d-flex justify-content-center">
    <div class="card m-5" style="width: 20rem;">
  <img src="${cartas.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${cartas.producto}</h5>
    <p class="card-text">${cartas.precios}</p>
    <p class="card-text">${cartas.cuotas}</p>
    <button onclick='comprar("compra confirmada")'>comprar</button>
  </div>
</div>
</section>`

  divContenido.appendChild (contenedorCars)
});

function comprar(carrito){
    console.log (carrito)
}

const form = document.getElementById ("usuario")
form.addEventListener ("submit", (e) =>{
    crearUsuariov(e)
})
function crearUsuariov (e){
  e.preventDefault()
  let inputNombre = document.getElementById("nombre")
  let inputGmail = document.getElementById("gmail")

  const user ={
    nombre: inputNombre.value,
    gmail: inputGmail.value,
  }
    console.log(user)

    localStorage.setItem("user", JSON.stringify(user))

}

setTimeout(() =>{
  console.log("Producto: PLAYSTATION 5, precio: $300.000, cuotas: 6 cuotas sin interes de $50.000")
}, 3000);

setTimeout(() =>{
  console.log("Producto TECLADO GAMEER, precio: $25.000, cuotas: 4 cuotas sin interes de $6.250 ")
},4000)

setTimeout(() =>{
  console.log("Producto: SILLA GAMER, precio: $120.000, cuotas: 6 cuotas sin interes de $20.000 ")
},5000)


fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(response => console.log(response))