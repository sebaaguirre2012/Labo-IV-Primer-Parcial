import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';
import { ActorAltaComponent } from './components/actor-alta/actor-alta.component';
import { PeliculasListadoComponent } from './components/peliculas-listado/peliculas-listado.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculaAltaComponent } from './components/pelicula-alta/pelicula-alta.component';

const routes: Routes = [
    { path: '', component: BusquedaComponent },
    { path: 'bienvenido', component: BienvenidoComponent },
    { path: 'busqueda', component: BusquedaComponent },
    { path: 'peliculas/alta', component: PeliculaAltaComponent },
    { path: 'peliculas/listado', component: PeliculasListadoComponent },
    { path: 'actor/alta', component: ActorAltaComponent },
    { path: 'actor/listado', component: ActorListadoComponent },
    { path: '**', pathMatch: 'full', component: BusquedaComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
