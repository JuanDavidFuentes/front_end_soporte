<template >
    <v-container class="body">
        <v-row style="margin:30px">
            <v-col cols="3" v-for="(p, i) in peliculas" :key="i">
                <template>
                    <v-card class="mx-auto" max-width="200">
                        <v-img class="white--text align-end" height="300px" :src="p.pelicula.imagen">
                        </v-img>
                        <v-card-subtitle class="pb-2">
                            <div class="black--text title">
                                {{ p.pelicula.titulo }}: {{ p.pelicula.subtitulo }}
                            </div>
                            <div>
                                {{ p.pelicula.fecha.slice(0, 10) }}
                            </div>
                        </v-card-subtitle>
                        <v-card-text>
                            <v-row class="mx-0">
                                <v-rating :value="p.pelicula.calificacion" color="amber" dense half-increments readonly
                                    size="14">
                                </v-rating>

                                <div class="grey--text ms-4">
                                    {{ p.pelicula.calificacion }}
                                </div>
                            </v-row>
                        </v-card-text>
                        <v-card-actions>
                            <v-row style="margin:0">
                                <v-col cols="4">
                                    <v-btn class="mx-2" fab dark small color="red" @click="Eliminarfavoritos(p._id)">
                                        <v-icon dark>
                                            mdi-heart-broken
                                        </v-icon>
                                    </v-btn>
                                </v-col>
                                <v-col cols="2">
                                    <v-btn color="primary" @click="detalles(p)">
                                        Detalles
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-card-actions>
                    </v-card>
                </template>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
            </v-col>
            <v-col cols="6">
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
import axios from 'axios'
export default {
    name: 'PageInicio',

    data() {
        return {
            favoritos: [],
            peliculas: [],
            data: this.$store.state.datos,
            pelis: this.$store.state.peliculas
        }
    },
    methods: {
        listar() {
            let header = { headers: { "x-token": this.$store.state.token } }
            axios.get(`https://apipeliculas1.herokuapp.com/api/favoritos/listarU/${this.data._id}`, header)
                .then(response => {
                    console.log(response.data.fav);
                    this.peliculas = response.data.fav
                })
                .catch(error => {
                    console.log(error);
                })
        },
        detalles(p) {
            this.$store.dispatch("setPelicula", p.pelicula);
            this.$router.push("/detalles")
        },
        Eliminarfavoritos(id) {
            console.log(this.peliculas);
            console.log(id);
            let header = { headers: { "x-token": this.$store.state.token } }
            axios.delete(`https://apipeliculas1.herokuapp.com/api/favoritos/${id}`, header)
                .then(response => {
                    console.log(response);
                    this.listar()
                    this.$swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: "Pelicula eliminada de favoritos",
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
                .catch(error => {
                    console.log(error);
                })
        }
    },
    created() {
        this.listar()
    },
}
</script>

<style>
.body {
    margin: 50px;
    font-family: sans-serif;
    display: grid;
    top: auto;
    min-height: 100vh;
    grid-template-rows: auto 1fr auto;
    align-items: center;
}
</style>