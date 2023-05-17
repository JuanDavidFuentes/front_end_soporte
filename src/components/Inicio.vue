<template>
    <v-container class="fill-height" style="background-color: #ffe4b5;" fluid>
        <div v-if="this.$store.state.token">
            <v-row class="my-13">

                <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4"> <!--v-if="$store.state.datos.rol == 'ADMIN' || $store.state.datos.rol == 'SUPERVISOR'"-->
                    <v-card class="green" dark>
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <div>
                                <v-card-title class="text-h5">Nuevo <br> Usuario </v-card-title>
                                <v-card-subtitle>Nuevo</v-card-subtitle>
                                <v-card-actions>
                                    <v-btn class="ml-2 mt-5"  rounded to="/agregarusuario">
                                        <v-icon class="mr-1">mdi-account-multiple-plus</v-icon>
                                        Agregar Usuario
                                    </v-btn>
                                </v-card-actions>
                            </div>
                            <v-avatar class="ml-n7 mr-5 mt-4" size="125">
                                <img height=70%
                                    src="https://i.postimg.cc/BnpC9521/add-new-user-avatar-icon-260nw-2100775648.png"
                                    alt="IMG_GOOGLE_USUARIO">
                            </v-avatar>
                        </div>
                    </v-card>
                </v-col>

                <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4"> <!--v-if="$store.state.datos.rol == 'RECEPCIONISTA' || $store.state.datos.rol == 'ADMIN' || $store.state.datos.rol == 'CIENTIFICO'"-->
                    <v-card class="primary" dark>
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <div>
                                <v-card-title class="text-h5">Recepción <br> Muestras </v-card-title>
                                <v-card-subtitle>Listar</v-card-subtitle>
                                <v-card-actions>
                                    <v-btn class="ml-2 mt-5 accent--text" outlined rounded @click="Listar()" to="/Muestras">
                                        <v-icon>mdi-beaker-outline</v-icon>
                                        Muestras
                                    </v-btn>
                                </v-card-actions>
                            </div>
                            <v-avatar class="ml-n7 mr-5 mt-4" size="125">
                                <img src="https://i.postimg.cc/tJL9gVP3/baf9b10d-2897-4afa-80cb-1509296f1c22.jpg"
                                    alt="John">
                            </v-avatar>
                        </div>
                    </v-card>
                </v-col>

                <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4"> <!--v-if="$store.state.datos.rol == 'RECEPCIONISTA' || $store.state.datos.rol == 'ADMIN'"-->
                    <v-card class="primary" dark>
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <div>
                                <v-card-title class="text-h5">Clientes</v-card-title>
                                <v-card-subtitle>Nuevo</v-card-subtitle>
                                <v-card-actions>
                                    <v-btn class="ml-2 mt-5 accent--text" outlined rounded to="/Clientes">
                                        <v-icon>mdi-clipboard-alert-outline</v-icon>
                                        Clientes
                                    </v-btn>
                                </v-card-actions>
                            </div>

                            <v-avatar class="ml-n7 mr-5 mt-4" size="125">
                                <img src="https://cdn.create.vista.com/api/media/small/453088566/stock-vector-add-group-icon-flat-design"
                                    alt="John">
                            </v-avatar>
                        </div>
                    </v-card>
                </v-col>


                <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4"><!--v-if="$store.state.datos.rol == 'RECEPCIONISTA' || $store.state.datos.rol == 'ADMIN'"-->
                    <v-card class="primary" dark>
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <div>
                                <v-card-title class="text-h5">Cotizaciones <br> </v-card-title>
                                <v-card-subtitle>Nuevo</v-card-subtitle>
                                <v-card-actions>
                                    <v-btn class="ml-2 mt-5 accent--text" outlined rounded to="/cotizacion">
                                        <v-icon>mdi-plus-circle-outline</v-icon>
                                        Agregar Cotizacion
                                    </v-btn>
                                </v-card-actions>
                            </div>
                            <v-avatar class="ml-n7 mr-5 mt-4" size="125">
                                <img src="https://i.postimg.cc/FKyjHyDr/f92370bc-369c-43bf-80d1-50843b170528.jpg"
                                    alt="John">
                            </v-avatar>
                        </div>
                    </v-card>
                </v-col>
            </v-row>

        </div>
        <!-- <v-btn @click="plisss()">Pelis</v-btn> -->
    </v-container>
</template>


<script>
//import axios from 'axios'
export default {
    name: 'PageInicio',

    data() {
        return {
            titulo: "",
            peliculas: []
        }
    },
    methods: {
        // listar() {
        //     let header = { headers: { "x-token": this.$store.state.token } }
        //     axios.get("https://apipeliculas1.herokuapp.com/api/peliculas", header)
        //         .then(response => {
        //             console.log(this.$store.state.datos.rol);
        //             this.peliculas = response.data.pelicula
        //         })
        //         .catch(error => {
        //             console.log(error);
        //         })
        // },
        // detalles(p) {
        //     this.$store.dispatch("setPelicula", p);
        //     this.$router.push("/detalles")
        // },
        // salir() {
        //     this.$router.replace("/")
        //     this.$store.commit("setToken", "")
        // },
        // buscar(){
        //     this.$router.push("/search")
        //     this.$store.state.titulo=this.titulo
        // },
        // plisss() {
        //     this.$router.push("/search")
        // }
    },
    // created() {
    //     this.listar()
    // },
}
</script>
