import login from '../components/Login.vue';
import inicio from '../components/Inicio.vue';
import detalles from '../components/Detalles.vue';
import registro from '../components/Registro.vue';
import perfil from '../components/Perfil.vue';
import favoritos from '../components/Favoritos.vue';
import actores from '../components/Actores.vue';
import peliculas from '../components/Peliculas.vue';
import editarPeli from '../components/EditarPeli.vue';
import listarActores from '../components/ListarActores.vue';
import editarActor from '../components/EditarActor.vue';
import search from '../components/Search.vue';
import holders from '../components/Holders.vue';

export const routes = [
    {path: '/', component: login},
    {path: '/registro', component: registro},
    {path: '/inicio', component: inicio},
    {path: '/detalles', component: detalles},
    {path: '/perfil', component: perfil},
    {path: '/favoritos', component: favoritos},
    {path: '/actores', component: actores},
    {path: '/peliculas', component: peliculas},
    {path: '/editarPeli', component: editarPeli},
    {path: '/listarActores', component: listarActores},
    {path: '/editarActor', component: editarActor},
    {path: '/search', component: search},
    {path: '/holders', component: holders}
]