<template>
    <v-container-fluid class="body">
        <div v-if="ocultar === 1">
            <v-img class="fondo" v-bind:style='{ backgroundImage: `url("${peliculas.imagen}")` }'>
                <v-row class="d">

                    <v-col cols="1">
                    </v-col>
                    <v-col cols="3">
                        <v-img class="align-end" height="500px" :src="peliculas.imagen"></v-img>
                        <v-row class="text-center" style="margin:0">
                            <v-col cols="1"></v-col>
                            <v-col cols="10">
                                <div class="custom-input-file col-md-6 col-sm-6 col-xs-6"
                                    v-if="$store.state.datos.rol == 'ADMIN'">
                                    <input type="file" id="fichero-tarifas" class="input-file" @change="subir">
                                    Editar poster
                                </div>
                            </v-col>
                            <v-col cols="1"></v-col>
                        </v-row>
                    </v-col>


                    <v-col cols="8">
                        <div class="text--secondary">
                            <div class="white--text display-2 font-weight-bold">
                                {{ peliculas.titulo }}: {{ peliculas.subtitulo }} ({{ peliculas.fecha.slice(0, 4) }})
                            </div>
                            <div class="white--text ms-5 mt-1 font-weight-light">
                                {{ peliculas.fecha.slice(0, 10) }} • {{ peliculas.genero }} • {{ peliculas.duracion }}
                            </div>
                            <p></p>
                            <div class="white--text display-2 font-weight-Medium">
                                Descripcion
                            </div>
                        </div>
                        <p></p>
                        <v-row class="d">
                            <div class="white--text title font-weight-light">
                                {{ peliculas.descripcion }}
                            </div>
                        </v-row>
                        <v-row class="d">
                            <v-rating :value="peliculas.calificacion" color="amber" dense half-increments readonly
                                size="25">
                            </v-rating>
                            <div class="white--text ms-2  title font-weight-light">
                                {{ peliculas.calificacion }} %
                            </div>
                        </v-row>
                        <v-row>
                            <v-btn class="mx-2" fab dark small color="blue" @click="favoritos()">
                                <v-icon dark>
                                    mdi-heart
                                </v-icon>
                            </v-btn>
                        </v-row>
                        <v-row style="margin-top:19%">
                            <v-col cols="4"></v-col>
                            <v-col cols="4">
                            </v-col>
                            <v-col cols="4" class="text-right" v-if="$store.state.datos.rol == 'ADMIN'">
                                <v-btn class="mx-2" fab dark small color="blue" @click="editarPeli()">
                                    <v-icon>
                                        mdi-border-color
                                    </v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-img>
            <v-row>

                <carousel-3d>
                    <slide v-for="(a, i) in actores" :key="i" :index="i">
                        <img height="270px" :src="a.idactor.foto" @click="actor(a)">
                    </slide>
                </carousel-3d>
            </v-row>

            <v-row style="margin:0">
                <v-row class="d">
                    <v-col cols="2"></v-col>
                    <v-col cols="8" class="margin">
                        <div class="blue--text text-center display-2 font-weight-bold">
                            Comentar
                        </div>
                        <v-form>
                            <v-text-field v-model="comentario" label="Comentario" type="text"></v-text-field>
                            <v-btn color="primary" @click="Icomentario()">Comentar</v-btn>
                        </v-form>
                    </v-col>
                    <v-col cols="2"></v-col>
                </v-row>
            </v-row>
            <br><br>
            <v-row class="d">
                <v-col cols="2"></v-col>
                <v-col cols="8" class="margin">
                    <div class="blue--text text-center display-2 font-weight-bold">
                        Comentarios
                    </div>
                    <br>
                    <v-row class="margin2" v-for="(c, i) in comentarios" :key="i">
                        <span>
                            <v-card class="mr-3 black--text title">
                                {{ c.usuario.usuario }}:   
                            </v-card>
                        </span>
                        <span>
                            <v-card>
                                     {{ c.comentario }}
                            </v-card>
                        </span>
                    </v-row>
                </v-col>
                <v-col cols="2"></v-col>
            </v-row>
        </div>

        <div v-if="ocultar === 0">
            <v-row>
                <v-col cols="3">
                    <v-img height="70vh" :src="detalles.idactor.foto"></v-img>
                </v-col>
                <v-col cols="8">
                    <div class="text-center display-2 black--text font-weight-Normal">
                        Detalles del Actor {{ detalles.idactor.nombre }}
                    </div>
                    <br><br><br><br><br>
                    <div>
                        <v-alert color="blue" outlined>
                            <span class="text-center display-1 black--text font-weight-Normal">
                                Nombre:
                            </span>
                            <span class="black-text title ml-4  black--text font-weight-light">
                                {{ detalles.idactor.nombre }}
                            </span>
                        </v-alert>
                    </div>
                    <div>
                        <v-alert color="blue" outlined>
                            <span class="text-center display-1 black--text font-weight-Normal">
                                Observaciones:
                            </span>
                            <span class="black-text title ml-4  black--text font-weight-light">
                                {{ detalles.idactor.observaciones }}
                            </span>
                        </v-alert>
                    </div>
                    <div>
                        <v-alert color="blue" outlined>
                            <span class="text-center display-1 black--text font-weight-Normal">
                                Personaje el cual interpreta el actor:
                            </span>
                            <span class="black-text title ml-4  black--text font-weight-light">
                                {{ detalles.personaje }}
                            </span>
                        </v-alert>
                    </div>
                </v-col>
                <v-col cols="1"></v-col>
            </v-row>
            <v-row>
                <v-col cols="2"></v-col>
                <v-col cols="8">
                </v-col>
                <v-col cols="2"></v-col>
            </v-row>
            <v-row>
                <v-col cols="4"></v-col>
                <v-col cols="4" class="text-center">
                    <v-btn color="primary" @click="volverr()">
                        volver
                    </v-btn>
                </v-col>
                <v-col cols="4"></v-col>
            </v-row>
        </div>
    </v-container-fluid>
</template>

<script>
import axios from "axios"
export default {
    name: "InicioDetalles",
    data() {
        return {
            peliculas: {},
            datos: {},
            actores: [],
            comentarios: [],
            detalles: [],
            idPeli: "",
            idUsu: "",
            idActor: "",
            comentario: "",
            ocultar: 1,
        }
    },
    methods: {
        listar() {
            this.peliculas = this.$store.state.peliculas
            this.actores = this.peliculas.reparto
            console.log(this.actores);
            console.log(this.peliculas);
        },
        favoritos() {
            this.datos = this.$store.state.datos
            this.idPeli = this.peliculas._id
            this.idUsu = this.datos._id
            // this.idActor=this.peliculas.reparto.idactor
            let header = { headers: { "x-token": this.$store.state.token } }
            axios.post("https://apipeliculas1.herokuapp.com/api/favoritos", {
                usuario: this.idUsu,
                pelicula: this.idPeli,

            }, header)
                .then(response => {
                    console.log(response.data.msg);
                    if (response.data.msg === "!La pelicula ya esta en favoritos") {
                        this.$swal.fire({
                            position: 'top-end',
                            icon: 'error',
                            title: response.data.msg,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    } else {
                        this.$swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: response.data.msg,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }


                })
                .catch(error => {
                    console.log(error);
                })
        },
        Icomentario() {
            this.datos = this.$store.state.datos
            this.idPeli = this.peliculas._id
            this.idUsu = this.datos._id
            let header = { headers: { "x-token": this.$store.state.token } }
            axios.post("https://apipeliculas1.herokuapp.com/api/comentarios", {
                usuario: this.idUsu,
                pelicula: this.idPeli,
                comentario: this.comentario
            }, header)
                .then(response => {
                    console.log(response.data);
                    this.traerComentatio()
                    this.comentario = ""
                })
                .catch(error => {
                    console.log(error);
                })
        },
        traerComentatio() {
            this.idPeli = this.peliculas._id
            axios.get(`https://apipeliculas1.herokuapp.com/api/comentarios/listarCdeP/${this.idPeli}`)
                .then(response => {
                    console.log(response);
                    this.comentarios = response.data.comen
                })
                .catch(error => {
                    console.log(error);
                })
        },
        actor(a) {
            this.ocultar = 0
            this.detalles = a
            console.log(this.detalles);
        },
        volverr() {
            this.ocultar = 1
        },
        editarPeli() {
            this.$router.push("/editarPeli")
        },
        fotoPeliEditar() {
        },
        subir(e) {
            this.img = e.target.files[0]
            console.log(this.img);
            let fd = new FormData();
            fd.append("archivo", this.img);
            let header = { headers: { "x-token": this.$store.state.token } };
            console.log(fd);
            axios.put(`https://apipeliculas1.herokuapp.com/api/peliculas/cargarCloud/${this.idPeli}`,
                fd, header)
                .then(response => {
                    console.log(response.data.url);
                    this.peliculas.imagen = response.data.url
                })
                .catch(error => {
                    console.log(error);

                })
        },
    },
    created() {
        this.listar()
        this.traerComentatio()
    },


}
</script>

<style>
.body {
    margin: 10px;
    font-family: sans-serif;
    display: grid;
    top: auto;
    min-height: 100vh;
    grid-template-rows: auto 1fr auto;
    align-items: center;
}

.d {
    margin: 0;
}

.fondo {
    margin: 0;
    min-height: 50vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
}

.fondo::before {
    content: "";
    width: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(90deg, #4c00fd 70%, #4c00fd00);
    opacity: 0.8;
    z-index: -1;
}

.margin {
    margin: 0;
    border: solid 2px #0099ff !important;
}

.margin2 {
    margin: 0;
    border: solid 2px #000000 !important;
}

.custom-input-file {
    background-color: rgb(0, 76, 255);
    color: #fff;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    margin: 0 auto 0;
    min-height: 15px;
    overflow: hidden;
    padding: 10px;
    position: relative;
    text-align: center;
    width: 400px;
}

.custom-input-file .input-file {
    border: 10000px solid transparent;
    cursor: pointer;
    font-size: 10000px;
    margin: 0;
    opacity: 0;
    outline: 0 none;
    padding: 0;
    position: absolute;
    right: -1000px;
    top: -1000px;
}
</style>

<!-- <div v-bind:style='{ backgroundImage: `url("${peliculas.imagen}")` }'></div> -->