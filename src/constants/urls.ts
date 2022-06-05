const baseURL = process.env.REACT_APP_API

const urls = {
    movies: '/discover/movie',
    movie: '/movie',
    genres: '/genre/movie/list',
    search: '/search/movie',
    img500: 'https://image.tmdb.org/t/p/w500/',
    img200: 'https://image.tmdb.org/t/p/w200'
}

export {urls, baseURL}