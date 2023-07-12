<template>
    <v-container>
        <div v-if="this.$store.state.token">
            <v-row class="mt-13">
                <v-col cols="5" xs="7" sm="4" md="2" lg="2" xl="2">
                    <v-dialog v-model="dialog" persistent>
                        <v-card>
                            <v-card-title class="text-h5 mb-5 center"> Datos Usuario </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row>

                                        <v-col cols="6" sm="6" class="mt-n7">
                                            <v-text-field v-model="nombre" label="Nombre*" filled rounded dense>
                                            </v-text-field>
                                        </v-col>

                                        <v-col cols="6" sm="6" class="mt-n7">
                                            <v-text-field v-model="apellidos" label="Apellidos*" persistent-hint required
                                                filled rounded dense></v-text-field>
                                        </v-col>
                                        <v-col cols="12" class="mt-n7">
                                            <v-text-field v-model="documento" label="Documento*" filled rounded dense>
                                            </v-text-field>
                                        </v-col>

                                        <v-col cols="6" sm="6" class="mt-n7">
                                            <v-text-field v-model="direccion" label="Dirección*" filled rounded dense>
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="6" class="mt-n7">
                                            <v-text-field v-model="celular" label="Celular*" filled rounded dense>
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="12" class="mt-n7">
                                            <v-select v-model="selecionadoRol" :items="rolPersona" dense filled rounded
                                                label="Rol">
                                            </v-select>
                                        </v-col>
                                        <v-col cols="6" sm="6" class="mt-n7">
                                            <v-text-field v-model="email" label="Correo*" filled rounded dense>
                                            </v-text-field>
                                        </v-col>

                                        <v-col cols="6" sm="6" class="mt-n7">
                                            <v-text-field v-model="password" label="Contraseña*"
                                                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                                :rules="[rules.required, rules.min]" :type="show ? 'text' : 'password'"
                                                hint="Al menos 8 carácteres" @click:append="show = !show" filled rounded
                                                dense>
                                            </v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions class="mt-n10">
                                <v-row>
                                    <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6" class="text-center">
                                        <v-btn class="mr-15" outlined color="red darken-3" @click="Volver()">
                                            Cancelar
                                        </v-btn>
                                    </v-col>
                                    <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6" class="text-center">
                                        <v-btn color="success" @click="Guardar()"> Guardar Datos </v-btn>
                                    </v-col>
                                </v-row>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-col>
            </v-row>

            <!-- tabla-->
            <div>
                <v-card>
                    <v-card-title>
                        <h3>Usuarios</h3>
                        <v-spacer></v-spacer>
                        <div>
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon color="green" rounded v-bind="attrs" v-on="on" @click="dialog = true">
                                        mdi-plus-circle
                                    </v-icon>
                                    Crear usuario
                                </template>
                                <span>Crea un usuario</span>
                            </v-tooltip>
                        </div>
                        <v-spacer></v-spacer>
                        <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" single-line hide-details>
                        </v-text-field>
                    </v-card-title>
                    <v-data-table :headers="headers" :items="Usuarios" :search="search">
                        <template v-slot:[`item.estado`]="{ item }">

                            <span class="green--text" v-if="item.estado === 1"> Activo</span>
                            <span class="red--text" v-else>Inactivo</span>
                        </template>

                        <template v-slot:[`item.opciones`]="{ item }">
                            <span v-if="item.estado === 1">
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon color="red" rounded v-bind="attrs" v-on="on" @click="desactivar(item._id)">
                                            mdi-shield-off
                                        </v-icon>
                                    </template>
                                    <span>Inactivar</span>
                                </v-tooltip>

                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon color="blue" rounded v-bind="attrs" v-on="on" @click="sacarid(item)">
                                            mdi-pencil
                                        </v-icon>
                                    </template>
                                    <span>Editar</span>
                                </v-tooltip>

                            </span>
                            <span v-else>
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon color="success" rounded v-bind="attrs" v-on="on" @click="activar(item._id)">
                                            mdi-shield-check-outline
                                        </v-icon>
                                    </template>
                                    <span>Activar</span>
                                </v-tooltip>

                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon color="blue" rounded v-bind="attrs" v-on="on" @click="sacarid(item)">
                                            mdi-pencil
                                        </v-icon>
                                    </template>
                                    <span>Editar</span>
                                </v-tooltip>
                            </span>
                        </template>
                    </v-data-table>
                </v-card>

            </div>
            <!--            <v-row class="mt-5">
                <v-col cols="7" xs="5" sm="8" md="10" lg="10" xl="10">
                    <v-btn class="mt-n3" outlined color="red darken-3" @click="Volver1()">
                        Volver
                    </v-btn>
                </v-col>
            </v-row>-->

            <div>
                <v-dialog v-model="dialog2" persistent max-width="1000px">
                    <v-card>
                        <v-card-title>
                            <span class="text-h5 mb-n2">Editar Datos Del Usuario</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>

                                    <v-col cols="6" sm="6" class="mt-n7">
                                        <v-text-field v-model="nombre" label="Nombre*" filled rounded dense></v-text-field>
                                    </v-col>

                                    <v-col cols="6" sm="6" class="mt-n7">
                                        <v-text-field v-model="apellidos" label="Apellidos*" persistent-hint required filled
                                            rounded dense></v-text-field>
                                    </v-col>

                                    <v-col cols="12" sm="12" class="mt-n7">
                                        <v-text-field v-model="documento" label="Documento*" disabled filled rounded dense>
                                        </v-text-field>
                                    </v-col>

                                    <v-col cols="6" sm="6" class="mt-n7">
                                        <v-text-field v-model="direccion" label="Dirección*" filled rounded dense>
                                        </v-text-field>
                                    </v-col>

                                    <v-col cols="6" class="mt-n7">
                                        <v-text-field v-model="celular" label="Celular*" filled rounded dense>
                                        </v-text-field>
                                    </v-col>

                                    <v-col cols="12" class="mt-n7">
                                        <v-select v-model="selecionadoRol" :items="rolPersona" dense filled rounded
                                            label="Rol">
                                        </v-select>
                                    </v-col>

                                    <v-col cols="6" sm="6" class="mt-n7">
                                        <v-text-field v-model="email" label="Email*" filled rounded dense></v-text-field>
                                    </v-col>

                                    <v-col cols="6" sm="6" class="mt-n7">
                                        <v-text-field v-model="password" label="Contraseña*"
                                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                            :rules="[rules.required, rules.min]" :type="show ? 'text' : 'password'"
                                            hint="Al menos 8 carácteres" @click:append="show = !show" filled rounded dense>
                                        </v-text-field>
                                    </v-col>

                                </v-row>
                            </v-container>
                        </v-card-text>
                        <v-card-actions class="mt-n11">
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="cerrar()">
                                Close
                            </v-btn>
                            <v-btn color="blue darken-1" text @click="editar()">
                                Save
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </div>
        </div>
        <div v-if="this.$store.state.token === ''">
            <v-row>
                <v-col cols="12" class="mb-16 box2">
                    <v-row>
                        <v-col cols="12" class="d-flex justify-center">
                            <img height="450"
                                src="https://cdn.dribbble.com/users/272763/screenshots/4576659/media/e7b35df88e9ab2a2ec158aaad703a7e9.gif" />
                        </v-col>
                    </v-row>
                    <center style="margin: 5vw;">
                        <h1 style="    color: var(--border); font-size: 2em;">Su sesión a caducado porfavor inicie
                            sesión nuevamente!</h1>
                        <p>
                            <v-btn rounded color="green" @click="volver()" dark>Iniciar sesión</v-btn>
                        </p>
                    </center>
                </v-col>
            </v-row>

        </div>
    </v-container>
</template>

<script>
import axios from "axios";

export default {
    name: "PageUsuarios",
    data: () => ({
        search: "",
        dialog: false,
        dialog2: false,
        show: false,

        Municipio: [],
        Usuarios: [],
        usuario: {},
        id: "",
        nombre: "",
        apellidos: "",
        documento: "",
        direccion: "",
        ciudad: "",
        celular: "",
        email: "",
        password: "",
        cargo: "",
        telefono: "",
        seleccionadoCiudad: "",
        selecionadoTipo: "",
        selecionadoRol: "",
        rules: {
            required: value => !!value || 'La contraseña Es obligatoria.',
            min: v => v.length >= 8 || 'Min 8 characters',
        },
        rolPersona: [
            { text: "ADMIN", value: "ADMIN" },
            { text: "AUXILIAR", value: "AUXILIAR" },
        ],
        headers: [
            {
                text: "Nombres",
                align: "start",
                value: "nombre",
            },
            {
                text: "Apellidos",
                align: "start",
                value: "apellidos",
            },
            {
                text: "C.C.",
                align: "start",
                value: "documento",
            },
            {
                text: "Dirección",
                align: "start",
                sortable: false,
                value: "direccion",
            },
            {
                text: "Celular",
                align: "start",
                sortable: false,
                value: "celular",
            },
            {
                text: "Correo",
                align: "start",
                sortable: false,
                value: "email",
            },
            {
                text: "Estado",
                align: "start",
                value: "estado",
            },
            {
                text: "Rol",
                align: "start",
                value: "rol",
            },
            {
                text: "Opciones",
                align: "start",
                value: "opciones",
            },
        ],
    }),

    methods: {
        volver() {
            this.$router.push("/")
        },
        changeState(valor) {
            this.selecionadoRol = this.rolPersona[valor - 1];
            this.selecionadoTipo = this.tipoPersona[valor - 1];
            this.seleccionadoCiudad = this.Municipio[valor - 1];
        },
        Guardar() {
            let header = { headers: { token: this.$store.state.token } };
            axios.post(`/usuarios/`,
                {
                    tipoPersona: this.selecionadoTipo,
                    cargo: this.cargo,
                    telefono: this.telefono,
                    rol: this.selecionadoRol,
                    nombre: this.nombre,
                    apellidos: this.apellidos,
                    documento: this.documento,
                    direccion: this.direccion,
                    ciudad: this.seleccionadoCiudad,
                    contacto: this.contacto,
                    celular: this.celular,
                    email: this.email.toUpperCase(),
                    password: this.password,
                },
                header
            )
                .then((response) => {
                    this.$swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: response.data.msg,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    this.selecionadoTipo = "";
                    this.cargo = "";
                    this.telefono = "";
                    this.selecionadoRol = "";
                    this.nombre = "";
                    this.apellidos = "";
                    this.documento = "";
                    this.direccion = "";
                    this.seleccionadoCiudad = "";
                    this.contacto = "";
                    this.celular = "";
                    this.email = "";
                    this.password = "";
                    this.dialog = false;
                    this.usuarios();
                })

                .catch((error) => {
                    console.log(error);
                    this.$swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: error.response.data.errores.errors[0].msg,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                });

        },

        editar() {
            let header = { headers: { "token": this.$store.state.token } }
            axios.put(`/usuarios/datos/${this.id}`, {
                tipoPersona: this.selecionadoTipo,
                cargo: this.cargo,
                telefono: this.telefono,
                rol: this.selecionadoRol,
                nombre: this.nombre,
                apellidos: this.apellidos,
                documento: this.documento,
                contacto: this.contacto,
                direccion: this.direccion,
                ciudad: this.seleccionadoCiudad,
                celular: this.celular,
                email: this.email.toUpperCase(),
                password: this.password,
            }, header)
                .then((response) => {
                    console.log(response);
                    this.$swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Datos Del Usuario actualizados correctamente",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    this.selecionadoTipo = ""
                    this.cargo = ""
                    this.telefono = ""
                    this.selecionadoRol = ""
                    this.nombre = ""
                    this.apellidos = ""
                    this.documento = ""
                    this.direccion = ""
                    this.seleccionadoCiudad = ""
                    this.celular = ""
                    this.email = ""
                    this.dialog2 = false
                    this.usuarios()
                })
                .catch((error) => {
                    console.log(error);
                });

        },

        cerrar() {
            this.selecionadoTipo = ""
            this.cargo = ""
            this.telefono = ""
            this.selecionadoRol = ""
            this.nombre = ""
            this.apellidos = ""
            this.documento = ""
            this.direccion = ""
            this.seleccionadoCiudad = ""
            this.celular = ""
            this.email = ""
            this.password = ""
            this.dialog2 = false
        },

        desactivar(id) {
            if (id === this.$store.state.datos._id) {
                this.$swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "No puedes desactivar el usuario que estas usando actualmente",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
            else {
                let header = { headers: { token: this.$store.state.token } };
                axios
                    .put(`/usuarios/desactivar/${id}`, {}, header)
                    .then((response) => {
                        console.log(response);
                        this.$swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: response.data.msg,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        this.usuarios();

                    })
                    .catch((error) => {
                        this.$swal.fire({
                            position: "top-end",
                            icon: "error",
                            title: error.response.data.errores.errors[0].msg,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    });
            }

        },
        activar(id) {
            let header = { headers: { token: this.$store.state.token } };
            axios
                .put(`/usuarios/activar/${id}`, {}, header)
                .then((response) => {
                    console.log(response);
                    this.$swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: response.data.msg,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    this.usuarios();
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        Volver() {
            this.dialog = false;
            this.dialog2 = false;
        },
        sacarid(usuario) {
            console.log(usuario);
            this.id = usuario._id
            this.dialog2 = true
            this.nombre = usuario.nombre
            this.apellidos = usuario.apellidos
            this.documento = usuario.documento
            this.direccion = usuario.direccion
            this.celular = usuario.celular
            this.email = usuario.email
            this.cargo = usuario.cargo
            this.telefono = usuario.telefono
            this.selecionadoTipo = usuario.tipoPersona
            this.selecionadoRol = usuario.rol
            this.contacto = usuario.contacto
            this.seleccionadoCiudad = usuario.ciudad
            if (this.$store.state.datos._id === usuario.id) {
                console.log();
            }
        },
        usuarios() {
            let header = { headers: { token: this.$store.state.token } };
            axios
                .get(`/usuarios`, header)
                .then((response) => {
                    console.log(response);
                    this.Usuarios = response.data.usuarios;

                })
                .catch((error) => {
                    console.log(error);
                });
        },

        Volver1() {
            this.$router.push("/Home");
        },
    },
    created() {
        this.usuarios()
    }
};
</script>