
  <template>
    <v-container-fluid class="body">
        <div class="text-center black--text display-2 font-weight-bold" v-if="$store.state.datos.rol == 'ADMIN'">Editar Actor</div>
        <div class="text-center black--text display-2 font-weight-bold" v-if="$store.state.datos.rol == 'usuario'">Actor</div>
        <v-row style="margin:0">
            <v-col cols="2">
                <v-img class="align-end" height="50vh" :src="actor.foto"></v-img>
                <v-row class="text-center" style="margin:0">
                    <v-col cols="1"></v-col>
                    <v-col cols="10">
                        <div class="custom-input-file col-md-6 col-sm-6 col-xs-6"
                            v-if="$store.state.datos.rol == 'ADMIN'">
                            <input type="file" id="fichero-tarifas" class="input-file" @change="subir">
                            Editar foto
                        </div>
                    </v-col>
                    <v-col cols="1"></v-col>
                </v-row>
            </v-col>
            <v-col cols="10" class="items-center">
                <br><br>
                <div>
                    <span class="text-center display-1 black--text font-weight-Normal">
                        Nombre:
                    </span>
                    <span>
                        <v-text-field v-model="nombre" label="Nombre" type="text"
                            v-if="$store.state.datos.rol == 'ADMIN'"></v-text-field>
                        <br>
                        <span class="text-center title black--text font-weight-light"
                            v-if="$store.state.datos.rol !== 'ADMIN'">
                            {{ this.nombre }}
                        </span>
                        <br>
                    </span>
                </div>
                <div>
                    <span class="text-center display-1 black--text font-weight-Normal">
                        Observaciones:
                    </span>
                    <span>
                        <v-textarea v-model="observaciones" outlined name="input-7-4" label="Descripcion" v-if="$store.state.datos.rol == 'ADMIN'">
                        </v-textarea>
                        <br>
                        <span class="text-center title black--text font-weight-light"
                            v-if="$store.state.datos.rol !== 'ADMIN'">
                            {{ this.observaciones }}
                        </span>
                        <br>
                    </span>
                </div>
                <div class="text-center" v-if="$store.state.datos.rol == 'ADMIN'">
                    <v-btn color="primary" @click="editar()">
                        Editar
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container-fluid>
</template>


<script>
import axios from "axios"
export default {
    name: 'PageEdit',

    data: () => ({
        actor: {},
        nombre: "",
        observaciones: "",
        idactor: ""
    }),
    methods: {
        infoActor() {
            this.actor = this.$store.state.actores
            this.nombre = this.actor.nombre
            this.observaciones = this.actor.observaciones
            this.idactor = this.actor._id
        },
        subir(e) {
            this.img = e.target.files[0]
            console.log(this.img);
            let fd = new FormData();
            fd.append("archivo", this.img);
            let header = { headers: { "x-token": this.$store.state.token } };
            console.log(fd);
            axios.put(`https://apipeliculas1.herokuapp.com/api/actores/cargarCloud/${this.idactor}`,
                fd, header)
                .then(response => {
                    console.log(response.data.url);
                    this.actor.foto = response.data.url
                })
                .catch(error => {
                    console.log(error);

                })
        },
        editar() {
            let header = { headers: { "x-token": this.$store.state.token } }
            axios.put(`https://apipeliculas1.herokuapp.com/api/actores/editar/${this.idactor}`, {
                nombre: this.nombre,
                observaciones: this.observaciones
            }, header)
                .then(response => {
                    console.log(response.data);
                    this.$swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: "Actor editado con exito",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    this.nombre = ""
                    this.observaciones = ""
                    this.$router.push("/listarActores")
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
        this.infoActor()
    },
}
</script>
<style>
.xd {
    margin: 0;
}
</style>