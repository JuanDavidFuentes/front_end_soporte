
<template>
   <v-container-fluid class="a1">
      <v-row class="b"></v-row>
      <v-row class="c">
         <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
               <v-card class="elevation-12">
                  <v-toolbar dark color="primary">
                     <v-toolbar-title>Inicio de sesion</v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                     <v-form>
                        <v-text-field v-model="email" label="Email" type="text" rounded dense filled></v-text-field>
                        <v-text-field v-model="password" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                           :rules="[rules.required, rules.min]" :type="show ? 'text' : 'password'"
                           hint="Al menos 8 carácteres" @click:append="show = !show" rounded dense filled></v-text-field>
                     </v-form>
                  </v-card-text>
                  <v-card-text>
                     <v-row class="d">
                        <v-col cols="5">
                           <v-btn color="primary" @click=resgistro()>Registrate</v-btn>
                        </v-col>
                        <v-col cols="7">
                           <p class="black--text">
                              Si no estas registrado registrate he inicia sesión
                           </p>
                        </v-col>
                     </v-row>
                  </v-card-text>
                  <v-card-actions>
                     <v-spacer></v-spacer>
                     <v-btn color="primary" @click=login()>Iniciar sesión</v-btn>
                  </v-card-actions>
               </v-card>
            </v-flex>
         </v-layout>
      </v-row>
      <v-row class="b"></v-row>
   </v-container-fluid>
</template>

 
<script>
import axios from "axios"
export default {
   name: 'PageLogin',

   data: () => ({
      email: "",
      password: "",
      valido: "",
      err: "",
      show: false,
      contra: "",
      rules: {
         required: value => !!value || 'Requerido',
         min: v => v.length >= 8 || 'Minimo 8 caracteres',
         emailMatch: () => (`El correo electrónico y la contraseña que ingresó no coinciden`),
      },
   }),
   methods: {
      login() {
         this.valido = this.email.toUpperCase();
         axios.post("/usuarios/login", {
            email: this.valido,
            password: this.password
         })
            .then(response => {
               console.log(response.data);
               this.$store.dispatch("setToken", response.data.token);
               this.$store.dispatch("setDatos", response.data.usuario);
               this.$router.push("/Home")
               // localStorage.setItem("datos",JSON.stringify(response.data.usuario))
            })
            .catch(error => {
               if (error.response.data.errores) {
                  this.$swal.fire({
                     position: 'top-end',
                     icon: 'error',
                     title: error.response.data.errores.errors[0].msg,
                     showConfirmButton: false,
                     timer: 1500
                  })
               } else {
                  this.$swal.fire({
                     position: 'top-end',
                     icon: 'error',
                     title: error.response.data.msg,
                     showConfirmButton: false,
                     timer: 1500
                  })
               }
               console.log(error);
            })
      },
      resgistro() {
         this.$router.push("/registro")
      }
   }
}
</script>

<style>
.a1 {
   height: 100%;
   margin: 0;
   background-image: url("https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/06/series-netflix.jpg")
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

 