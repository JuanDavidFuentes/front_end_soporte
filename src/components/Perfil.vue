<template >
    <v-container class="body">
        <div v-if="ocultar === 1">
            <v-row class="perfil">
                <v-col cols="2"></v-col>
                <v-col cols="8" class="items-center">
                    <center>
                        <v-avatar size="200">
                            <img :src="data.foto">
                        </v-avatar>
                    </center>
                </v-col>
                <v-col cols="2"></v-col>
            </v-row>
            <v-row>
                <v-col cols="2"></v-col>
                <v-col cols="8" class="items-center">
                    <br>
                    <br>
                    <br>
                    <div>
                        <v-alert color="blue" outlined>
                            <span class="text-center headline black--text font-weight-Normal">
                                Usuario:
                            </span>
                            <span class="black-text title ml-4  black--text font-weight-light">
                                {{ data.usuario }}
                            </span>
                        </v-alert>
                    </div>
                    <div>
                        <v-alert color="blue" outlined>
                            <span class="text-center headline black--text font-weight-Normal">
                                Nombres y apellidos:
                            </span>
                            <span class="black-text title ml-4  black--text font-weight-light">
                                {{ data.nombre }} {{ data.apellido }}
                            </span>
                        </v-alert>

                    </div>
                    <div>
                        <v-alert color="blue" outlined>
                            <span class="text-center headline black--text font-weight-Normal">
                                Correo:
                            </span>
                            <span class="black-text title ml-4  black--text font-weight-light">
                                {{ data.email }}
                            </span>
                        </v-alert>
                    </div>
                    <br>
                    <div>
                        <v-btn @click="cambio()" color="primary">
                            Editar perfil
                        </v-btn>
                    </div>
                </v-col>
                <v-col cols="2"></v-col>
            </v-row>
        </div>




        <div v-if="ocultar === 0">
            <v-row>
                <v-col cols="2"></v-col>
                <v-col cols="8" class="items-center">
                    <br><br>
                    <div>
                        <span class="text-center display-1 black--text font-weight-Normal">
                            Nuevo usuario:
                        </span>
                        <span>
                            <v-text-field v-model="usuario" label="Usuario" type="text"></v-text-field>
                        </span>
                    </div>
                    <div>
                        <span class="text-center display-1 black--text font-weight-Normal">
                            Nuevos nombres:
                        </span>
                        <span>
                            <v-text-field v-model="nombres" label="Nombres" type="text"></v-text-field>
                        </span>
                    </div>
                    <div>
                        <span class="text-center display-1  black--text font-weight-Normal">
                            Nuevos apellidos:
                        </span>
                        <span>
                            <v-text-field v-model="apellidos" label="apellidos" type="text"></v-text-field>
                        </span>
                    </div>
                    <div>
                        <span class="text-center display-1 black--text font-weight-Normal">
                            Correo:
                        </span>
                        <span>
                            <v-text-field disabled v-model="correo" type="text"></v-text-field>
                        </span>
                    </div>
                    <div>
                        <span class="text-center display-1 black--text font-weight-Normal">
                            Nueva contraseña:
                        </span>
                        <span>
                            <v-text-field v-model="password" label="password" type="password"></v-text-field>
                        </span>
                    </div>
                    <br>
                    <div class="custom-input-file col-md-6 col-sm-6 col-xs-6">
                        <input type="file" id="fichero-tarifas" class="input-file" @change="subir">
                        Editar Foto
                    </div>
                    <br>
                    <div>
                        <v-btn @click="editar()" color="primary">
                            Editar perfil
                        </v-btn>
                    </div>
                    <br>
                    <div>
                        <v-btn @click="volver()" color="primary">
                            Cancelar
                        </v-btn>
                    </div>
                </v-col>
                <v-col cols="2">

                </v-col>
            </v-row>
        </div>
    </v-container>
</template>


<script>
import axios from 'axios'
export default {
    name: 'PagePerfil',

    data() {
        return {
            data: {},
            ocultar: 1,
            usuario: "",
            nombres: "",
            apellidos: "",
            correo: "",
            password: "",
            img: ""
        }
    },
    methods: {
        perfil() {
            this.data = this.$store.state.datos
            console.log(this.data);
        },
        editar() {
            console.log(this.idusu);
            let header = { headers: { "x-token": this.$store.state.token } }
            axios.put(`https://apipeliculas1.herokuapp.com/api/usuario/editar/${this.data._id}`, {
                usuario: this.usuario,
                nombre: this.nombres,
                apellido: this.apellidos,
                contrasena: this.password
            }, header)
                .then(response => {
                    console.log(response.data);
                    this.$swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: "Datos editados con exito",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    this.$router.replace("/")
                    this.$store.commit("setToken", "")

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
        cambio() {
            this.ocultar = 0
        },
        volver() {
            this.ocultar = 1
        },
        subir(e) {
            this.img = e.target.files[0]
            console.log(this.img);
            let fd = new FormData();
            fd.append("archivo", this.img);
            let header = { headers: { "x-token": this.$store.state.token } };
            console.log(fd);
            axios.put(`https://apipeliculas1.herokuapp.com/api/usuario/cargarCloud/${this.$store.state.datos._id}`,
                fd, header)
                .then(response => {
                    console.log(response.data.url);
                    this.$store.state.datos.foto = response.data.url
                    this.$swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: "Foto editada con exito",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    this.ocultar = 1
                })
                .catch(error => {
                    console.log(error);

                })
        },
    },
    created() {
        this.correo = this.$store.state.datos.email
        this.perfil()
    },
}
</script>

<style>
.body4 {
    margin: 44px;
    font-family: sans-serif;
    display: grid;
    top: auto;
    min-height: 78vh;
    grid-template-rows: auto 1fr auto;
    align-items: center;
}

.perfil {
    background-color: darkgray;
}
</style>