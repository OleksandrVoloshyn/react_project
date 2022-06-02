const baseURL = process.env.REACT_APP_API

const urls = {
    allMovies: '/discover/movie',
    movie: '/movie',
    genres: '/genre/movie/list',
    search: '/search/keyword'
}

export {urls, baseURL}