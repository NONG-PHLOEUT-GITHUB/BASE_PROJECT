<template>
  <v-app>
    <router-view />
    <loading/>
  </v-app>
</template>

<script>
import Loading from './components/global/Loading.vue';
  export default {
    components:{
      Loading
    },
    name: 'App',
  }
</script>

<style>

</style>
