# PracticaDomYEventos2.0

Lo primero que he tenido en cuenta es que elementos del documento HTML iban a ser estaticos y cuales dinamicos. En este caso el HTML se me vino dado.


Una vez deidido, elegí que elementos del DOM tenía que capturar para usar posteriormente:

```js
const btnMostrar = document.querySelector('#btnMostrar')
const cajaMiniaturas = document.querySelector("#cajaMiniaturas")
const cajaFotoGrande = document.querySelector("#cajaFotoGrande")
```

Despues decidi que habia que crear para posteriormente pintar, en este caso un array con las fotos 

```js
const arrayImagenes = [
    {
        foto: "assets/viajes-1.jpg",
        alter: "mujer tumbada en amaca en la playa",
        titulo: "Viaje 1",
        pie: "Pie de pagina",
        id: "1"
    },...
]
```
### Funciones

una vez decidido esto, pense que acciones necesitaba:

1. pintar las fotos en pequeño:

con un forEach recorro cada objeto del array y por cada objeto creo un elemento div y img. A su vez creo los atributos src y alt rellenandolos con el valor de las llaves que corresponden (foto => src y alter => alt). 
Despues meto (en el orden que lo haria en un HTML) el img dentro de div (foto dentro de caja) y finalmente todo dentro del fragment. Este "descargara" todo en cajaMiniaturas que es como llame el div donde queria que se formaran las imagenes.

```js

const nuevosElementos = () => {

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

```

2. pintar la foto grande:

aqui creo al igual que en la funcion anterior el HTML de forma dinamica y lo coloco dentro de mi div cajaFotoGrande. El innerHTML vacio al principio de la funcion impide que se acumulen una y otra vez cada vez que se hace click en los botones. 

```js
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
```


### Eventos
Una vez decididas las funciones tenia que ver cuando se ejecutarian. Al hacer click en el boton "Mostrar Fotos".


```js
btnMostrar.addEventListener("click", ()=>{ 
        nuevosElementos();  
    })
```

en este segundo evento cree una constante filter que captura aquellos elementos que tienen src, es decir las imagenes. Al pasarlo como argumento a pintaGrande ya tenemos creada la foto en grande.
```js
document.addEventListener("click", (ev)=>{
   const filter = ev.target.src
    
        pintaGrande(filter)
        
} )
```