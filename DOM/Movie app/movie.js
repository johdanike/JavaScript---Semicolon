const API_KEY = "api_key=d59c7b28e92f24b3f428ca732c1463e1";
const BASE_URL = "https://api.themoviedb.org/3/";
const SEARCHMOVIEURL = `${BASE_URL}search/movie?${API_KEY}`
const API_URL = `${BASE_URL}movie/popular?${API_KEY}`;
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";


const movieMainContainer = document.querySelector(".movieMainContainer")
console.log(movieMainContainer)
console.log(API_URL)

// PROMISES METHOD
// const getMovies = (url)=>{
//     fetch(url)
//     .then((response)=> response.json())
//     .then((data)=>{console.log(data)})
//     .catch((error) => console.log(error))
// }

// getMovies(API_URL)


//TRY_AND_CATCH METHOD
const getMovies = async (url)=>{
    try{
        const response = await fetch(url)
        // if(!response.ok){
        //     throw new Error("");
        // }
        const data = await response.json();
        console.log(data.results)
        // console.log(response)
        showMovie(data.results)
    } catch(error){
        console.log(error)
    }
}

getMovies(API_URL)

function showMovie(movies){
    movieMainContainer.innerHTML = '';

    movies.forEach(movie => {
        const {overview , title, vote_avearge, poster_path} = movie
        // console.log(title)
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <div>
                <img src = "${IMAGE_URL}${poster_path}" alt="image">
            </div>

            
            <div class = "titlerating">
                <div class = "own">
                    <span>${title}</span>
                    <span>${vote_avearge}</span>
                </div>
            </div>
            <div class = "overview">
                <h2>Overview</h2>
                <p>${overview}</p>
            </div>
        `
        movieMainContainer.appendChild(movieElement);

    }
    );
}

const searchMovieForm = document.querySelector('.search');
console.log(searchMovieForm);

searchMovieForm.addEventListener('keyup', (event)=>{
    event.preventDefault();
    const inputValue = event.target.value
    console.log(inputValue)
    if(inputValue){
        const searchUrl = SEARCHMOVIEURL + "&query=" + inputValue 
        console.log(searchUrl)
        getMovies(searchUrl)
    }
})

