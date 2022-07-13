/* function saludar (){
    swal("Hola locazo")
} */

/* saludar() */
let time= 1000;

/* function promedio(){
    swal("¿Que nota sacaste?")
} */
/* promedio() */

/* function compra(){
    swal("Comprate unas chipas")
}
 */

/* function insertar(){
    let inserto = prompt("Man! que estas haciendo?");
   
}

setTimeout (saludar, 1000)
setTimeout(promedio, 4000)
setTimeout(compra, 6000)

setTimeout(()=>{
    swal("lavate las manos pa")
}, 2500);


setTimeout(insertar, jj) */ //EL PARAMETRO DEL TIEMPO PUEDE SER UNA VARIABLE YA DEFINIDA CON ANTERIORIDAD



//FETCH


/* fetch('https://jsonplaceholder.typicode.com/posts/')
    .then((response) => response.json())
    .then((datos) => console.log(datos[1]));

 */
fetch('https://jsonplaceholder.typicode.com/posts/')

    .then((response)=> response.json())
    .then((post)=>{
        console.log(post);
        console.log(post[0])
        setTimeout(()=>{
            swal (post[3].body)
            swal(post[3].body)


            console.log(post[3].body)
        }, time);
    })
/* 
const place= document.querySelector("#post")

post.forEach(post => {
    const p = document.createElement("p")
    p.innerHTML=`<h2>${post.title}</h2>
    <hr>
    <p>${post.body}</p>`
    place.append(p)
}); */


fetch("https://apis.datos.gob.ar/georef/api/provincias?nombre=Sgo. del Estero")
    .then((response)=>response.json())
    .then((prov)=>{
        console.log(prov)

        setTimeout(()=>{
            swal(prov)
        }, 2500)
       
        
    })