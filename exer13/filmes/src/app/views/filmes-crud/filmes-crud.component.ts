import { Component, OnInit } from '@angular/core';
import { Router } from'@angular/router'

@Component({
  selector: 'app-filmes-crud',
  templateUrl: './filmes-crud.component.html',
  styleUrls: ['./filmes-crud.component.css']
})
export class FilmesCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToFilmeCreate(): void{
    this.router.navigate(['/filmes/create'])
  }

}
