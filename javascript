array:
Const Posts =[{
    Identificación: 1,
    Título: "Mi Primer Post",
    imagen: "wawa.com/img",
    Etiquetas: "whata",
},
{
    Identificación: 2,
    Título: "Mi segundo post",
    imagen: "wawa.com/img",
    Etiquetas: "nosa",
},
{
    Identificación: 3,
    Título: "The When The",
    imagen: "wawa.com/img",
    Etiquetas: "yesa",
}]
puestos. find(post=>post. id==1)
puestos. some(post=>post. id===1)
puestos. some(post=>post. . includes("whata"))
puestos. every(post=>post. . includes("nosa"))
puestos. map(post=>post. título)
puestos. filter(post=>post. . includes("whata"))
puestos. filter(post=>post?. imagen)
puestos. reduce((allTags, posts)=>{
    volver [... allTags,... puestos. Etiquetas]
})
puestos. reduce((allTags, posts)=>{
    devolver Array. de  (new Set([... allTags,... puestos. Etiquetas]))
},[])
puestos. reduce((allTags, posts)=>{
    volver [... allTags,... puestos. Etiquetas]
},[]). filter((post, index, self)=>index===self. IndexOf(post))





clases:

const libro = {
    titulo: "Aprendiendo JavaScript",
    autor: "idk man",
    numpaginas:"100",
    editorial: "c325s.net",
    precio: "134.42",
    edad: 36,
    Redes:{
        Twitter:"Twitter punto com",
        TikTok:"No"

    },
    leer: función() {
        consola. log("¿Fr? ¿Ong?")
    }
}

let pages = "numpaginas"
libro[páginas]
libro. mirada de soslayo()
libro. autor. nombre
libro["autor"]["redes"]["twitter"]

const carro1 = {marca: "Renault", modelo: "Twingo",}
const carro2 = {marca: "Renault", modelo: "Twingo",}
carro1 === carro2 
carro1. marca === carro2. marca
carro3===Carro1





clousures:
const saludar=function(nombre){
    return "Hola"+nombre;
}
saludar("Ronal")
saludar;

redundante como el infierno pero oh bueno
const a ="hola"
Función Global(){
    const b ="que";
    función local(){
    const c = "hace"
    Devolver A+B+C    
    }
    Volver local;
}
global()
global()()
Cierre const  = global();
clausura();

const miContador = (function(){
    Sea _contador = 0;
    función incrementar(){
        Volver _contador++;
    }
    función decrementar(){
        Volver _contador--;
    }
    Valor de la función (){
        Volver _contador;
    }
    devolución{
        incrementar,
        decrementar,
        valor,
    }
})();
miContador. valor()
miContador. incrementar incrementar()
miContador. valor()
miContador. incrementar incrementar()
miContador. decrementar()
miContador. incrementar incrementar()
miContador. valor()
miContador. incrementar incrementar()
miContador. valor()
miContador. incrementar incrementar()
miContador. decrementar()
miContador. incrementar incrementar()
miContador. valor()





es6:
const nombre="daniel"
const edad="16"
const twitter="twitter.com"


const persona={
    nombre:nombre,
    edad:edad,
    twitter:twitter,
}
consola. log(persona)

function Componente({initialState, totalCount}){
    const[state, setState]=setState({initialState,totalCount})
}


function nombredelafuncion(){
    Devolver "Hola";
}
const funcionflecha=()=>"hola"

nombredelafuncion();
funcionflecha();


función ListaDeTareas(){
    devolución(
        <Ul>
            {listado. map(elemento=>(<li>{elemento. nombre}</li>))}
        </Ul>
    )
}

Plaza Const={
    x:10,
    y:10,
}
function calcSurface({x, y}){
    Devolver x*y;
}
calcSurface(cuadrado);

function Avatar({nombre de usuario, url}){
    return <img src={url} alt={username}/>
}

Suma de funciones  (a, b){
    if(a===indefinido || b=== indefinido){
        consola. log("Inserte 2 valores".)
        devolución;
    }
    Devolver A+B;
}
suma(3+2)

const array=[1,2,3,4,5 ]
const otroarray=[6,7,8,9,10 ]

const nuevoarray=[... matriz, ... otroarray]
consola. log(nuevoarray)

const obj1={
    a:"a", 
    b:"b", 
    c:"c",
}
const obj2={
    d:"d", 
    e:"e",
}
const nuevoobjeto= Objeto. asignar(... obj1,... obj2);
consola. log(nuevoarray)
consola. log(nuevoobjeto)
function Componente({id, ... utilería}){
    return <Nuevocomponente key={id}{... utilería}/>}



código que no funciona, increíble
export function sum(a,b){
//     ...
// }
export function anotherfunction(){}
// ---
export function subs(a,b){
//     ...
// }
// ---
importar {sum} desde './sum';
importar subs desde './subs';
function calculadora(){
sum();
subs();
// }

import React desde 'react'
Reacción. useState
Reacción. useFragmento
Reacción. fragmento

const coche={
    marca:"Renault",
    modelo:"Twingo",
}
let model=coche. modelo ? coche. modelo: "Twingo";

modelo;

Oh chico tiempo de reacción
// function ListaTareas({tareas}){
// retorno(
// <ReactFragment>
// {tareas.length ? (
// <ul>
// {tareas.map...}
// </ul>
// //             ):(
// <div>No hay tareas</div>
// //             )}
// </ReactFragment>
// //     )
// // }
Esto obviamente no funcionará porque no tengo React instalado

función suma2(a,b){
    a=a?? 0
    b=b?? 0
    Devolver A+B
}
suma2(4)

function Avatar({user}){
    return <img src={user. imageUrl ??  'example.com'}/>
}
usuario const={
    nombre,
    edad,
    Ubicación:{
        x,
        y,
        Ciudad:{
 código postal,
 LDL,
        }
    }
}
función Usuario(){
    return(<div>ZIP CODe: {user?. ubicación?. ciudad?. código postal}</div>)
}
Pie de página
© 2023 GitHub, Inc.
Navegación de pie de página
Letra chica
Privaci







intro:
clase Inventario {
    constructor(Nombre) {
        esto. nombre = Nombre;
        esto. articulos = [];
    }
    getNombre() {
        f();
        Devuelva esto. Nombre;

    }
    add(articulo, cantidad) {
        f();
        esto. articulos[articulo] = cantidad ;
    }
    cantidad(articulo) {
        Devuelva esto. articulos[articulo ];
    }
}

let libros = new Inventario('libros' );
libros. getNombre()
libros. add("Aprendiendo JavaScript", 5)
libros. ("Aprendiendo JavaScript" )




objthis:
var obj={
    foo: function (){return foo},
    Bar: función (){
        documento. addEventListener("click", function (evento){
            eso. Foo()

        }). atar()
    }
}
