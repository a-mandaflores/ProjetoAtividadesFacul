<template>
  <div class="app">
  <BarComponentsVue/>
  <router-view/>
  </div>
  
</template>

<script>
import BarComponentsVue from './components/BarComponents.vue'

export default {
  name: 'App',
  components: {
    BarComponentsVue
  }
}
</script>

<style>

body{
  background-color: whitesmoke;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.app{
  display: flex;

}
</style>
