import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from "./views/home/home.component";
import { FilmesCrudComponent } from "./views/filmes-crud/filmes-crud.component";
import { FilmesCreateComponent } from './components/filmes/filmes-create/filmes-create.component';


const routes: Routes = [{
  path: "",
  component: HomeComponent
},{
  path: "filmes",
  component: FilmesCrudComponent
},{
  path: "filmes/create",
  component: FilmesCreateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
