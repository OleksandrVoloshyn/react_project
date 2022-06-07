const baseURL = process.env.REACT_APP_API

const urls = {
    movies: '/discover/movie',
    movie: '/movie',
    genres: '/genre/movie/list',
    search: '/search/movie'
}

const img500 = 'https://image.tmdb.org/t/p/w500/'
const img200 = 'https://image.tmdb.org/t/p/w200/'
const alternativeUrlPhoto = 'https://www.moranyachts.com/sites/default/files/cannes-bs2017_3.jpg'

export {baseURL, urls, img500, img200, alternativeUrlPhoto}