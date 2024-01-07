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

2. pintar la foto grande blablabla:

```js

```


### Eventos
Una vez decididas las funciones tenia que ver cuando se ejecutarian. Al hacer click en el boton "Mostrar Fotos".
En este evento puse un condicional que se asegurara mi div cajaMiniaturas estuviera vacio antes de pintarse.

```js
btnMostrar.addEventListener("click", ()=>{
    if (cajaMiniaturas.children.length === 0) {
        nuevosElementos();
    }
    
    })
```

en este segundo evento utilice target blablabla
```js
document.addEventListener("click", (ev)=>{
    if(ev.target.matches("#cajaMiniaturas img")){
        pintaGrande(ev.target)
    }

    
} )
```