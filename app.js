let pagina=1;


const btnSiguiente=document.getElementById('btnSiguiente').addEventListener('click',()=>{
    if (pagina < 1000){
        pagina+=1;
        cargarPeliculas();
    }
    
})
const btnAnterior=document.getElementById('btnAnterior').addEventListener('click',()=>{

if (pagina > 1){
    pagina-=1;
    cargarPeliculas();
    }
   
})

console.log(pagina);

const cargarPeliculas=async()=>{

    try{
        const respuesta= await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=7c93a29133df64c786e0131de31c666c&language=esp-MX&page=${pagina}`)
        
        if(respuesta.status===200){
            const datos= await respuesta.json();
            let peliculas=''     
            datos.results.forEach(pelicula => {
                 peliculas += 
                 
                 `<div class='pelicula'>
                 <img class= 'poster'src= https://image.tmdb.org/t/p/w500/${pelicula.poster_path}>
                 
                 </div> 
                 <h3 class='titulo'>${pelicula.title}</h3>
                 `
                 });
            document.getElementById('contenedor').innerHTML=peliculas

        }else if(respuesta.status===401){
            console.log('mala la clave')
        }else if(respuesta.status===404){
            console.log('la pelicula no existe')
        }
    }
    catch(error){
        console.log(error)
    };

};

cargarPeliculas();