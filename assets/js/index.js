




// const alumnos = [{
//     id: 1,
//     nombre: "Dylan",
//     conocimientos: ["Camila", "CSS"]
// },
// {
//     id: 2,
//     nombre: "Damian",
//     conocimientos: ["CSS", "JS"]
// },
// {
//     id: 3,
//     nombre: "Camila",
//     conocimientos: ["JS", "REACT"]
// },
// {
//     id: 4,
//     nombre: "Matheo",
//     conocimientos: ["REACT", "HTML"]
// }
// ]


//find me sirve para devolverme un nuevo array con el primer dato que hace match

// let metodoFind = alumnos.find(alum => alum.nombre === "Camila")
// console.log(metodoFind)

//Some este método devuelve true o false dependiendo si existe o no lo que estamos buscando

// let metodoSome = alumnos.some(alumn => alumn.nombre === "Joaquin")
// console.log(metodoSome)

//Include (hay algun elemento que incluya en el array)
// let metodoSomeInclude = alumnos.some(alumn => alumn.conocimientos.includes("CSS"))
// console.log(metodoSomeInclude)

// every no solo comprueba si hay uno, sino si todos lo tienen

// let metodoEvery = alumnos.every(alumn => alumn.conocimientos.includes("CSS"))
// console.log(metodoEvery)


// map es como el bucle for pero mas declarativo (yo le digo lo que quiero que haga)

// let metodoMap = alumnos.map(alumn => alumn.nombre)
// console.log(metodoMap)

// // Diferencia del metodo map con el metodo forOf
// let metodoFor = []
// for (const iterator of alumnos) {
//     metodoFor.push(iterator.nombre)
// }
// console.log(metodoFor)


// //metodo filter, es como el fin pero me trae todo lo que hacen match
// metodoFilter = alumnos.filter(alumn => alumn.conocimientos.includes ("REACT"))
// console.log(metodoFilter)

// reduce para reducir recibe el acumulador y luego el elemento que va iterando y devuelve un nuevo array y luego lo inicializamos con un array vacío para que entienda que el acumulador es un objeto. 
// let metodoReduce = alumnos.reduce((todosLosConocimientos, alumn) => {
//     return [...todosLosConocimientos, alumn.conocimientos]
// }, [])
// console.log (metodoReduce)

// Ejercicio de Rick and morty con find

const todos = document.getElementById("todos")
const mujeres = document.getElementById("mujeres")
const hombres = document.getElementById("hombres")
const paginaActual = document.getElementById("pagActual")
const totalPagina = document.getElementById("pagTotal")

let url = "https://rickandmortyapi.com/api/character"

function renderizado (numeroPag=1, genero, ptotal){
    fetch(url + "?page=" + numeroPag + genero)
    .then((res)=> res.json())
    .then((data) =>{
        console.log(data)
        let element = document.querySelector("#tarjetas")
        let html = ""
        // for (const iterator of data.results) {
        let findPront = prompt("Buscá a tu personaje")
        let findd = data.results.find(alum => alum.name === findPront)
        // console.log(findd)
           html +=
           
            `
            <div class="card">
                <h2>${findd.name}</h2>
                <img src=${findd.image} alt"">
                <p>Genero: ${findd.gender}</p>
              </div>
            ` 
        // }
        
        element.innerHTML = html
        totalPagina.textContent = `Total de páginas:${ptotal}`
        paginaActual.textContent= `Pagina actual: ${numeroPag}`
    })
}
renderizado(1, "", 42)