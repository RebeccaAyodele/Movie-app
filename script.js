const API_KEY = 'api_key=8c0c579fa8c91cb9e829a81075c47c32';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/movie/popular?' + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const searchURL = BASE_URL + '/search/movie?' + API_KEY;

const main = document.getElementById("main");
const form = document.querySelector(".form");
const search = document.getElementById("search");

function toggleMenu() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    const menuIcon = document.getElementById("menu-icon")
    dropdownMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');   
}

function searchButton(){
    const navBar = document.getElementById("nav-bar");
    navBar.classList.remove("nav-bar");
    navBar.classList.add("search")
}


getMovies(API_URL);

function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showMovies(data.results);
    })
}

function showMovies(data) {
    main.innerHTML = "";

    data.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie;
        const movie1 = document.createElement("div");
        movie1.classList.add("movie");
        movie1.innerHTML = `<img src="${IMG_URL + poster_path}" alt=${title}"><div class="movie-info"><h3>${title}</h3><span class="${getColor(vote_average)}">${vote_average}</span></div><div class="overview"><h3>Overview</h3>${overview}</div>`
        main.appendChild(movie1);
    })
}


function getColor(vote){
    if (vote>= 8){
        return "green"
    }else if(vote >= 5){
        return "orange"
    }else {
        return "red"
    }
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm){
        getMovies(searchURL + '&query=' + searchTerm)
    }else {
        getMovies(API_URL);
    }
})
