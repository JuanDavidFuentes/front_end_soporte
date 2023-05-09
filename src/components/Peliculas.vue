 <template>
    <v-container class="body">
        <div class="text-center black--text display-2 font-weight-bold">Insertar Peliculas</div>
        <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="8" class="items-center">
                <br><br>
                <div>
                    <span class="text-center display-1 black--text font-weight-Normal">
                        Titulo:
                    </span>
                    <span>
                        <v-text-field v-model="titulo" label="Titulo" type="text"></v-text-field>
                    </span>
                </div>
                <div>
                    <span class="text-center display-1 black--text font-weight-Normal">
                        Subtitulo:
                    </span>
                    <span>
                        <v-text-field v-model="subtitulo" label="Subtitulo" type="text"></v-text-field>
                    </span>
                </div>
                <div>
                    <span class="text-center display-1  black--text font-weight-Normal">
                        Fecha:
                    </span>
                    <span>
                        <v-text-field v-model="fecha" label="Fecha" type="date"></v-text-field>
                    </span>
                </div>
                <div>
                    <span class="text-center display-1 black--text font-weight-Normal">
                        Descripcion:
                    </span>
                    <span>
                        <v-textarea v-model="descripcion" outlined name="input-7-4" label="Descripcion">
                        </v-textarea>
                    </span>
                </div>
                <div>
                    <span class="text-center display-1 black--text font-weight-Normal">
                        Genero:
                    </span>
                    <span>
                        <v-text-field v-model="genero" label="Genero" type="text"></v-text-field>
                    </span>
                </div>
                <div>
                    <span class="text-center display-1 black--text font-weight-Normal">
                        Duracion:
                    </span>
                    <span>
                        <v-text-field v-model="duracion" label="Duracion" type="text"></v-text-field>
                    </span>
                </div>
                <div>
                    <span class="text-center display-1 black--text font-weight-Normal">
                        Calificacion:
                    </span>
                    <span>
                        <v-text-field v-model="calificacion" label="Calificacion" type="text"></v-text-field>
                    </span>
                </div>
                <div>
                    <span class="text-center display-1 black--text font-weight-Normal">
                        Reparto:
                    </span>
                </div>
                <div>
                    <v-btn color="blue darken-1" v-if="x === 1" text @click="x = 0">
                        Mostrar actores
                    </v-btn>
                    <div v-if="x === 0">
                        <v-btn color="blue darken-1" text @click="x = 1">
                            Ocultar actores
                        </v-btn>
                        <v-row>
                            <v-col cols="4"></v-col>
                            <v-col cols="4">
                                <v-row>
                                    <v-btn class="mt-3 mr-1" rounded color="blue" @click="buscar()">
                                        <v-icon dark>
                                            mdi-magnify
                                        </v-icon>
                                    </v-btn>
                                    <v-text-field v-model="nombre" label="Buscar actor" type="text"></v-text-field>
                                </v-row>

                            </v-col>
                            <v-col cols="4"></v-col>
                        </v-row>
                    </div>
                </div>
                <v-row>
                    <v-col cols="1"></v-col>
                    <v-col cols="10">
                    </v-col>
                    <v-col cols="1"></v-col>
                </v-row>
                <v-row>
                    <v-col cols="1"></v-col>
                    <v-col cols="10">
                        <v-row v-if="x === 0">
                            <v-col cols="3" v-for="(a, i) in actores" :key="i">
                                <v-card class="mx-auto" max-width="200">
                                    <v-img class="white--text align-end" height="150px" :src="a.foto">
                                    </v-img>
                                    <v-card-subtitle class="pb-2">
                                        <div class="black--text title">
                                            {{ a.nombre }}
                                        </div>
                                    </v-card-subtitle>
                                    <v-card-text>
                                        <v-row class="mx-0">
                                            <div class="grey--text ms-4">

                                            </div>
                                            <div>

                                            </div>
                                        </v-row>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn color="primary" dark @click="sacarId(a)">
                                            <v-icon dark>
                                                mdi-loupe
                                            </v-icon>
                                        </v-btn>
                                        <v-row justify="center" style="margin:0">

                                        </v-row>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                        <br><br>
                        <div v-if="aparecer === 0">
                            <span class="text-center display-1 black--text font-weight-Normal">
                                Insertar Poster:
                            </span>
                            <br><br>
                            <div>
                                <br>
                                <input type="file" @change="subir">
                            </div>
                            <br>
                            <v-row>
                                <v-col cols="4">
                                    <div>
                                        <v-btn @click="borrar()" color="red">Cancelar</v-btn>
                                    </div>
                                    <br><br>
                                </v-col>
                                <v-col cols="4"></v-col>
                                <v-col cols="4">
                                    <div>
                                        <v-btn @click="agregar()" color="primary">Agregar pelicula</v-btn>
                                    </div>
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>
                    <v-col cols="1"></v-col>
                </v-row>
                <br>
                <div>
                    <v-btn v-if="aparecer === 1" @click="insertarPeli()" color="primary">
                        Continuar
                    </v-btn>
                </div>
            </v-col>
            <v-col cols="2">

            </v-col>
        </v-row>
        <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card>
                <v-card-title>
                    <span class="text-h5">{{ nombredeactor }}</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field v-model="personaje" label="Personaje*">
                                </v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click=cancelar()>
                        Close
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="insertarActor()">
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>


<script>
import axios from "axios"
export default {
    name: 'PagePelis',

    data: () => ({
        actores: [],
        titulo: "",
        subtitulo: "",
        fecha: "",
        descripcion: "",
        genero: "",
        duracion: "",
        calificacion: "",
        reparto: [],
        idactor: "",
        personaje: "",
        dialog: false,
        aparecer: 1,
        alerta: "",
        idpeli: "",
        nombredeactor: "",
        x: 1,
        nombre: ""
    }),
    methods: {
        insertarPeli() {
            let header = { headers: { "x-token": this.$store.state.token } }
            axios.post("https://apipeliculas1.herokuapp.com/api/peliculas", {
                titulo: this.titulo,
                subtitulo: this.subtitulo,
                fecha: this.fecha,
                descripcion: this.descripcion,
                genero: this.genero,
                duracion: this.duracion,
                calificacion: this.calificacion,
                reparto: this.reparto
            }, header)
                .then(response => {
                    console.log(response.data);
                    this.alerta = response.data.msg
                    this.idpeli = response.data.pelicula._id
                    this.aparecer = 0
                })
                .catch(error => {
                    console.log(error);
                    this.$swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: error.response.data.errors[0].msg,
                        showConfirmButton: false,
                        timer: 1500
                    })

                })
        },
        traerActores() {
            axios.get(`https://apipeliculas1.herokuapp.com/api/actores`)
                .then(response => {
                    console.log(response);
                    this.actores = response.data.actor
                    console.log(this.actores);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        sacarId(actor) {
            this.dialog = true
            this.idactor = actor._id
            this.nombredeactor = actor.nombre
        },
        insertarActor() {
            if (this.personaje === "") {
                this.$swal({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Inserta el personaje!',
                })
            } else {
                let actores = { idactor: this.idactor, personaje: this.personaje }
                this.reparto.push(actores)
                this.idactor = ""
                this.personaje = ""
                this.dialog = false
            }
        },
        cancelar() {
            this.idactor = ""
            this.personaje = ""
            this.dialog = false
        },
        subir(e) {
            this.img = e.target.files[0]
            console.log(this.img);
        },
        agregar() {
            if (this.img != undefined) {
                let fd = new FormData();
                fd.append("archivo", this.img);
                let header = { headers: { "x-token": this.$store.state.token } };
                console.log(fd);
                axios.put(`https://apipeliculas1.herokuapp.com/api/peliculas/cargarCloud/${this.idpeli}`,
                    fd, header)
                    .then(response => {
                        console.log(response.data.url);
                        this.$swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: this.alerta,
                            showConfirmButton: false,
                            timer: 1500
                        })
                        this.aparecer = 1
                        this.titulo = ""
                        this.subtitulo = ""
                        this.fecha = ""
                        this.descripcion = ""
                        this.genero = ""
                        this.duracion = ""
                        this.calificacion = ""
                        this.reparto = []
                        this.idactor = ""
                        this.personaje = ""
                        this.alerta = ""
                        this.idpeli = ""
                        this.img = undefined
                        this.$router.push("/inicio")
                    })
                    .catch(error => {
                        console.log(error);

                    })
            } else {
                this.$swal({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Inserta una poster de la Pelicula!',
                })
            }
        },
        borrar() {
            let header = { headers: { "x-token": this.$store.state.token } }
            axios.delete(`https://apipeliculas1.herokuapp.com/api/peliculas/${this.idpeli}`, header)
                .then(response => {
                    console.log(response);
                    this.aparecer = 1
                    this.reparto = []
                    this.img = undefined
                })
                .catch(error => {
                    console.log(error);
                })
        },
        buscar() {
            axios.get(`https://apipeliculas1.herokuapp.com/api/actores/buscar?nombre=${this.nombre}`)
                .then(response => {
                    this.actores = response.data.actor
                    console.log(this.titulo);
                })
                .catch(error => {
                    console.log(error);
                })
        }

    },
    created() {
        this.traerActores()
    },
}
</script>

<style>
.a {
    height: 100%;
    margin: 0;
    background-image: url("https://www.todofondos.net/wp-content/uploads/1920x1080-Fondo-de-pantalla-Aesthetic.jpg")
}

.b {
    height: 15%;
    margin: 0;
}

.c {
    height: 70%;
    margin: 0;
}

.d {
    margin: 0;
}
</style>

