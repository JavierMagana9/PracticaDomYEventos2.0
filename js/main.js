//elementos a capturar
const btnMostrar = document.querySelector('#btnMostrar')
const cajaMiniaturas = document.querySelector("#cajaMiniaturas")
const cajaFotoGrande = document.querySelector("#cajaFotoGrande")

const fragment = document.createDocumentFragment()

//almacenarlas en un array como OBJETOS, que tambien incluiran titulo y pie de foto y id
const arrayImagenes = [
    {
        foto: "assets/viajes-1.jpg",
        alter: "mujer tumbada en amaca en la playa",
        titulo: "Viaje 1",
        pie: "Pie de pagina",
        id: "1"
    },
    {
        foto: "assets/viajes-2.jpg",
        alter: "Bungaloo en la playa",
        titulo: "Viaje 2",
        pie: "Pie de pagina",
        id: "2"
    },
    {
        foto: "assets/viajes-3.jpg",
        alter: "Cruce de caminos",
        titulo: "Viaje 3",
        pie: "Pie de pagina",
        id: "3"
    },
    {
        foto: "assets/viajes-4.jpg",
        alter: "Plaza España en Sevilla",
        titulo: "Viaje 4",
        pie: "Pie de pagina",
        id: "4"
    },
];



btnMostrar.addEventListener("click", ()=>{ 
        nuevosElementos();  
    })

document.addEventListener("click", (ev)=>{
   const filter = ev.target.src
    
        pintaGrande(filter)
        console.log(filter)
} )



const nuevosElementos = () => {
    cajaMiniaturas.innerHTML = '';
    arrayImagenes.forEach((item)=>{

        const caja = document.createElement("div")
        const foto = document.createElement("img")
        foto.src = item.foto
        foto.alt = item.alter
        foto.classList.add("img-thumbnail")
        caja.append(foto)
        fragment.append(caja)
        
    })
    cajaMiniaturas.append(fragment)

}



const pintaGrande = (filter) => {

    cajaFotoGrande.innerHTML = '';

    
        const caja = document.createElement("div")
        const foto = document.createElement("img")
        foto.src = filter
        foto.classList.add("img-thumbnail")
        caja.append(foto)
        fragment.append(caja)
        
    
    cajaFotoGrande.append(fragment)
}





