<template>
    <v-container class="body">
        <div v-if="$store.state.token !== ''">
            <v-row style="margin:0">
                <v-col cols="4"></v-col>
                <v-col cols="4">
                    <v-row>
                        <v-btn class="mt-3 mr-1" rounded color="blue" @click="buscar()">
                            <v-icon dark>
                                mdi-magnify
                            </v-icon>
                        </v-btn>
                        <v-text-field v-model="titulo2" label="Search" type="text"></v-text-field>
                    </v-row>

                </v-col>
                <v-col cols="4"></v-col>
            </v-row>
            <v-row style="margin:30px">
                <v-col cols="3" v-for="(p, i) in peliculas" :key="i">
                    <template>
                        <v-card class="mx-auto" max-width="200">
                            <v-img class="white--text align-end" height="300px" :src="p.imagen">
                            </v-img>
                            <v-card-subtitle class="pb-2">
                                <div class="black--text title">
                                    {{ p.titulo }}: {{ p.subtitulo }}
                                </div>
                                <div>
                                    {{ p.fecha.slice(0, 10) }}
                                </div>
                            </v-card-subtitle>
                            <v-card-text>
                                <v-row class="mx-0">
                                    <v-rating :value="p.calificacion" color="amber" dense half-increments readonly
                                        size="14">
                                    </v-rating>
                                    <div class="grey--text ms-4">
                                        {{ p.calificacion }}
                                    </div>
                                    <div>

                                    </div>
                                </v-row>
                            </v-card-text>
                            <v-card-actions>
                                <v-row>
                                    <v-col cols="2"></v-col>
                                    <v-col cols="3">
                                        <v-btn color="primary" @click="detalles(p)">
                                            Detalles
                                        </v-btn>
                                    </v-col>
                                    <v-col cols="2"></v-col>
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
        </div>
        <div class="body2" v-else>
            <v-row>
                <v-col>
                </v-col>
                <v-col>
                    <v-img height="50vh"
                        src="http://pa1.narvii.com/6427/55743623c1b8724e3dc412582b53f125499f23c6_00.gif">
                    </v-img>
                </v-col>
                <v-col></v-col>
            </v-row>
            <v-row>
                <v-col cols="4"></v-col>
                <v-col cols="4" class="text-center">
                    <v-alert color="red" dense outlined shaped text>
                        <p>Su sesion a caducado porfavor inicie sesion</p>
                        <v-btn @click="salir()">
                            Volver
                            <v-icon dark>
                                mdi-reload
                            </v-icon>
                        </v-btn>
                    </v-alert>
                </v-col>
                <v-col cols="4"></v-col>
            </v-row>
        </div>
    </v-container>
</template>


<script>
import axios from 'axios'
export default {
    name: 'PageSearch',

    data() {
        return {
            peliculas: [],
            titulo: "",
            titulo2: ""
        }
    },
    methods: {
        listar() {
            axios.get(`https://apipeliculas1.herokuapp.com/api/peliculas/buscar?titulo=${this.titulo}`)
                .then(response => {
                    this.peliculas = response.data.pelicula
                    console.log(this.titulo);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        detalles(p) {
            this.$store.dispatch("setPelicula", p);
            this.$router.push("/detalles")
        },
        salir() {
            this.$router.replace("/")
            this.$store.commit("setToken", "")
        },
        buscar() {
            this.titulo=this.titulo2
            this.listar()
        }
    },
    created() {
        this.titulo = this.$store.state.titulo
        this.listar()
    },
}
</script>
<style>
.body2 {
    margin: 30px;
    font-family: sans-serif;
    display: grid;
    top: auto;
    min-height: 78vh;
    grid-template-rows: auto 1fr auto;
    align-items: center;
}
</style>