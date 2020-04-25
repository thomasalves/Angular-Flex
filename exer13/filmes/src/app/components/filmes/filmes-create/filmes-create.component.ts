import { FilmesService } from './../filmes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Filmes } from './../filme.model';


@Component({
  selector: 'app-filmes-create',
  templateUrl: './filmes-create.component.html',
  styleUrls: ['./filmes-create.component.css']
})
export class FilmesCreateComponent implements OnInit {

  filme: Filmes = {
    Nome:'',
    Ano: null,
    Diretor: '',
    Genero: '',
    Descricao: '',
    Poster: ''
  }

  constructor(private FilmesService: FilmesService,
    private router: Router) { }

  ngOnInit(): void {

  }

  createFilmes(): void {
    this.FilmesService.create(this.filme).subscribe(() => {

      this.FilmesService.showMessage('Filme adicionado')
      this.router.navigate(['/filmes'])

    })

  }

  cancel(): void {
    this.router.navigate(['/filmes'])
  }
}
