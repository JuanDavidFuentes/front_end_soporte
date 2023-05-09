
  <template>
    <v-container-fluid class="body">
        <v-row style="margin:30px">
            <v-col cols="2" v-for="(a, i) in actores" :key="i">
                <template>
                    <v-card class="mx-auto" max-width="200">
                        <v-img class="white--text align-end" height="300px" :src="a.foto">
                        </v-img>
                        <v-card-subtitle class="pb-2">
                            <div class="black--text title">
                                {{ a.nombre }}
                            </div>
                        </v-card-subtitle>
                        <v-card-actions>
                            <v-row>
                                <v-col cols="2"></v-col>
                                <v-col cols="3">
                                    <v-btn color="primary" @click="editar(a)">
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
    </v-container-fluid>
</template>


<script>
import axios from "axios"
export default {
    name: 'PageListar',

    data: () => ({
        actores: []
    }),
    methods: {
        listarActores() {
            axios.get("https://apipeliculas1.herokuapp.com/api/actores")
                .then(response => {
                    this.actores = response.data.actor
                    console.log(this.actores);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        editar(a){
            this.$store.dispatch("setActor", a);
            this.$router.push("/editarActor")
        }
    },
    created() {
        this.listarActores()
    },
}
</script>

<style>
</style>
