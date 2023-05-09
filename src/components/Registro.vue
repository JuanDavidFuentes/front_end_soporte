  <template>
    <v-container-fluid>
        <v-img src="https://www.todofondos.net/wp-content/uploads/1920x1080-Fondo-de-pantalla-Aesthetic.jpg">
            <v-row class="b"></v-row>
            <v-row class=" mt-n8">
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card class="elevation-12">
                            <v-toolbar dark color="primary">
                                <v-toolbar-title>Resgistro</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field v-model="usuario" label="Usuario" type="text"></v-text-field>
                                    <v-text-field v-model="nombre" label="Nombre" type="text"></v-text-field>
                                    <v-text-field v-model="apellido" label="Apellido" type="text"></v-text-field>
                                    <v-text-field v-model="email" label="Email" type="text"></v-text-field>
                                    <v-text-field v-model="contrasena" label="Contraseña" type="password">
                                    </v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="primary" @click=volver()>Volver</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" @click=registro()>registro</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-row>
            <v-row class="b"></v-row>
        </v-img>
    </v-container-fluid>
</template>


<script>
import axios from "axios"
export default {
    name: 'PageRegistro',

    data: () => ({
        usuario: "",
        nombre: "",
        apellido: "",
        email: "",
        contrasena: "",
    }),
    methods: {
        registro() {
            axios.post("https://apipeliculas1.herokuapp.com/api/usuario", {
                usuario: this.usuario,
                nombre: this.nombre,
                apellido: this.apellido,
                email: this.email,
                contrasena: this.contrasena
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
                    this.$router.push("/")
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
        volver() {
            this.$router.push("/")
        }
    }
}
</script>

<style>
.a2 {
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

.bodyyyyy {
    font-family: sans-serif;
    display: grid;
    top: auto;
    min-height: 100%;
    grid-template-rows: auto 1fr auto;
    align-items: center;
}
</style>