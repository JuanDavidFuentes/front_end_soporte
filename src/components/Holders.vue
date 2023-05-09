<template>
    <v-container style="margin-top: 100px;">
        <div v-if="$store.state.token !== ''">
            <div class="text-center black--text font-weight-Normal">
                <h1>Usuarios</h1>
            </div>
            <v-row style="margin:0">
                <v-col cols="2"></v-col>
                <v-col cols="8">
                    <template>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left black--text title">
                                            Usuario
                                        </th>
                                        <th class="text-left black--text title">
                                            Nombres
                                        </th>
                                        <th class="text-left black--text title">
                                            Correos
                                        </th>
                                        <th class="text-left black--text title">
                                            Estado
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(u, i) in usuarioo" :key="i">
                                        <td>{{ u.usuario }}</td>
                                        <td>{{ u.nombre }}</td>
                                        <td>{{ u.email }}</td>
                                        <td>
                                            <v-btn v-if="u.estado === 1" color="success" class="mr-3"
                                                @click="desactivar(u._id)">
                                                Activado
                                            </v-btn>
                                            <v-btn color="error" v-if="u.estado === 0" @click="activar(u._id)">
                                                Desactivado
                                            </v-btn>
                                        </td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </template>
                </v-col>
                <v-col cols="2"></v-col>
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
        <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark v-bind="attrs" v-on="on">
                        <v-icon dark>
                            mdi-plus
                        </v-icon>
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>
                        <span class="text-h5">User Profile</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="usuario" label="Usuario*" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="nombre" label="Nombres" required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="apellido" label="Apellidos*" persistent-hint required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field v-model="email" label="Email*" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field v-model="contrasena" label="Password*" type="password" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-select v-model="rol" :items="['ADMIN', 'usuario']" label="Rol*" required>
                                    </v-select>
                                </v-col>
                            </v-row>
                        </v-container>
                        <small>*Todas las casillas son obligatorias</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog=false">
                            Close
                        </v-btn>
                        <v-btn color="blue darken-1" text @click="agregar()">
                            Save
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </v-container>
</template>


<script>
import axios from 'axios'
export default {
    name: 'PageHolders',

    data() {
        return {
            usuarioo: [],
            usuario: "",
            nombre: "",
            apellido: "",
            email: "",
            contrasena: "",
            rol:"",
            dialog: false,
            // roles:[
            //     "ADMIN",
            //     "usuario"
            // ]
        }
    },
    methods: {
        usuarios() {
            axios.get("https://apipeliculas1.herokuapp.com/api/usuario/listar")
                .then(response => {
                    this.usuarioo = response.data.usu
                    console.log(this.usuarioo);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        desactivar(id) {
            let header = { headers: { "x-token": this.$store.state.token } }
            console.log(header);
            axios.put(`https://apipeliculas1.herokuapp.com/api/usuario/desactivar/${id}`, {}, header)
                .then(response => {
                    console.log(response);
                    this.$swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: response.data.msg,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    this.usuarios()
                })
                .catch(error => {
                    console.log(error);
                })
        },
        activar(id) {
            let header = { headers: { "x-token": this.$store.state.token } }
            axios.put(`https://apipeliculas1.herokuapp.com/api/usuario/activar/${id}`, {}, header)
                .then(response => {
                    console.log(response);
                    this.$swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: response.data.msg,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    this.usuarios()
                })
                .catch(error => {
                    console.log(error);
                })
        },
        salir() {
            this.$router.replace("/")
            this.$store.commit("setToken", "")
        },
        agregar() {
            axios.post("https://apipeliculas1.herokuapp.com/api/usuario", {
                usuario: this.usuario,
                nombre: this.nombre,
                apellido: this.apellido,
                email: this.email,
                contrasena: this.contrasena,
                rol: this.rol
            })
                .then(response => {
                    console.log(response.data);
                    this.$swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: "Registro exitoso",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    this.usuarios()
                    this.dialog = false
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
        }
    },
    created() {
        this.usuarios()
    },
}
</script>
