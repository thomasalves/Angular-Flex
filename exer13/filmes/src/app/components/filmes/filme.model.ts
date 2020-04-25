import { Url } from 'url';


export interface Filmes {
    id?: number
    Nome: string
    Ano: number
    Diretor: string
    Genero: string
    Descricao: string
    Poster: Url
}