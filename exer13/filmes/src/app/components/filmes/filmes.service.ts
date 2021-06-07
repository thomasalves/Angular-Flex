import { Filmes } from './filme.model';
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  baseUrl = "https://my-json-server.typicode.com/thomasalves/json-server/Filmes"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string):void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"

    })
  }

  create(filme: Filmes): Observable<Filmes> {
    return this.http.post<Filmes>(this.baseUrl, filme)
  }

  read(): Observable<Filmes[]> {
    return this.http.get<Filmes[]>(this.baseUrl)
  }
}
