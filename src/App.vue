<template>
  <v-app>
    <Header/>
    <router-view/>
    <Footer/>

  </v-app>
</template>


<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',

  components: {
    Header,
    Footer
},

  data: () => ({
    //
  }),
};
</script>
<style>
.body{
  margin:10px;
  font-family:sans-serif;
  display: grid;
  top:auto;
  min-height:78vh;
  grid-template-rows:auto 1fr auto;
  align-items: center;
}

</style>