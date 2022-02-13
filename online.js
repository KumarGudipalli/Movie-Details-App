let key ="0a86b08f0a05c7ef96b0225e610c2180";
 
let api_url=  `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${key}`
let img_url=`https://image.tmdb.org/t/p/w500`

let searchMovies = `https://api.themoviedb.org/3/search/movie?api_key=0a86b08f0a05c7ef96b0225e610c2180&query=`

let movies = document.getElementById("movies")
let form = document.getElementById("box2")
let search = document.getElementById("showmovies")


display(api_url)
async function display(url){
    try{
        let res =  await fetch(url)
        let data = await res.json()
         console.log(data.results)
         Show(data.results);
    } catch(err){
        console.log(err)
    }

}
 function Show(data){
    movies.innerHTML=""
data.forEach(movie => {

    let{title,poster_path,vote_average,overview}=movie;

    let movieel = document.createElement("div")

    movieel.classList.add("div1");

    movieel.innerHTML=
    ` 
    <img src="${img_url+poster_path}" alt="${title}">
  <div class="details">
  <h2>${title}</h2>
      <span class="${getcolor(vote_average)}">${vote_average}</span>
    </div>
      <div class="text">
        <h2>
        ${overview}
       </h2>
      </div>
    
 `
 movies.appendChild(movieel)
});

}

function getcolor(vote){
  if(vote>=8){
    return "green"

  } else if(vote<8){
    return  "red"
  } else {
    return "red"
  }
}
    
form.addEventListener('submit', (e) =>{
  e.preventDefault();
let show = search.value;

if(show){
display(searchMovies+show)

} else{
  display(api_url)
}
})


 
// https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg