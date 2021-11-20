<template>
  <div id="app">
	<navheader ></navheader>

    <router-view/>
  </div>
</template>

<script>
import navheader from './components/header.vue';
import localComponent from './components/example.vue'
export default {
  name: 'App',
  components: {
    navheader,
	  localComponent
  },
	
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
