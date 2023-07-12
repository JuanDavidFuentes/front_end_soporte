import login from '../components/Login.vue';
import inicio from '../components/Inicio.vue';
import Usuarios from '../components/Usuarios.vue';

export const routes = [
    {path: '/', component: login},
    {path: '/inicio', component: inicio},
    {path: '/usuario', component: Usuarios},

]