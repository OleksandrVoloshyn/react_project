export interface IGenre {
    id: number,
    name: string
}

export interface IGenreRequest {
    genres: IGenre[]
}