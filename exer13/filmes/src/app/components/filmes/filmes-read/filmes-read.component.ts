import { FilmesService } from './../filmes.service';
import { Filmes } from './../filme.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filmes-read',
  templateUrl: './filmes-read.component.html',
  styleUrls: ['./filmes-read.component.css']
})
export class FilmesReadComponent implements OnInit {

  filmes : Filmes[]
  displayedColumns  = ['Poster', 'Nome', 'Ano', 'Diretor', 'Genero', 'Descricao']

  constructor(private filmeService: FilmesService) { }

  ngOnInit(): void {
    this.filmeService.read().subscribe(filmes => {
      this.filmes= filmes
      console.log(filmes)
    })
  }

}
