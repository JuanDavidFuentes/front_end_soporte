<template>
    <v-container class="fill-height" fluid>
        <div v-if="this.$store.state.token">
            <v-row class="my-13" align="center" justify="center">
                <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">  <!--v-if="$store.state.datos.rol == 'ADMIN' -->
                    <template>
                        <v-hover v-slot="{ hover }" open-delay="150">
                            <v-card class="mx-auto" :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }" color="black"  outlined dark>
                                <v-list-item three-line>
                                    <v-list-item-content>
                                        <v-list-item-title class="text-h5 mb-1">
                                            Crear Nuevo <br> Usuario
                                        </v-list-item-title>
                                    </v-list-item-content>
                                    <v-list-item-avatar size="100" color="grey">
                                        <img height=70%
                                            src="https://i.postimg.cc/BnpC9521/add-new-user-avatar-icon-260nw-2100775648.png"
                                            alt="IMG_GOOGLE_USUARIO">
                                    </v-list-item-avatar>
                                </v-list-item>
                                <v-card-actions>
                                    <v-btn color="white" outlined rounded to="/usuario">
                                        <v-icon class="mr-1" dark>mdi-account-multiple-plus</v-icon>
                                        Agregar Usuario
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-hover>
                    </template>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">  <!--v-if="$store.state.datos.rol == 'ADMIN' -->
                    <template>
                        <v-hover v-slot="{ hover }" open-delay="150">
                            <v-card class="mx-auto" :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }" color="black"  outlined dark>
                                <v-list-item three-line>
                                    <v-list-item-content>
                                        <v-list-item-title class="text-h5 mb-1">
                                            Crear nuevo usuario
                                        </v-list-item-title>
                                    </v-list-item-content>
                                    <v-list-item-avatar size="100" color="grey">
                                        <img height=70%
                                            src="https://i.postimg.cc/BnpC9521/add-new-user-avatar-icon-260nw-2100775648.png"
                                            alt="IMG_GOOGLE_USUARIO">
                                    </v-list-item-avatar>
                                </v-list-item>
                                <v-card-actions>
                                    <v-btn color="white" outlined rounded to="/agregarusuario">
                                        <v-icon class="mr-1" dark>mdi-account-multiple-plus</v-icon>
                                        Agregar Usuario
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-hover>
                    </template>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">  <!--v-if="$store.state.datos.rol == 'ADMIN' -->
                    <template>
                        <v-hover v-slot="{ hover }" open-delay="150">
                            <v-card class="mx-auto" :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }" color="black"  outlined dark>
                                <v-list-item three-line>
                                    <v-list-item-content>
                                        <v-list-item-title class="text-h5 mb-1">
                                            Crear nuevo usuario
                                        </v-list-item-title>
                                    </v-list-item-content>
                                    <v-list-item-avatar size="100" color="grey">
                                        <img height=70%
                                            src="https://i.postimg.cc/BnpC9521/add-new-user-avatar-icon-260nw-2100775648.png"
                                            alt="IMG_GOOGLE_USUARIO">
                                    </v-list-item-avatar>
                                </v-list-item>
                                <v-card-actions>
                                    <v-btn color="white" outlined rounded to="/agregarusuario">
                                        <v-icon class="mr-1" dark>mdi-account-multiple-plus</v-icon>
                                        Agregar Usuario
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-hover>
                    </template>
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
