<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return{
    characters: []
    }
  },
  components: {

  },
  methods: {
    fetchCharacter: function () {
      fetch('https://the-one-api.dev/v2/character', {
        method: 'GET',
        headers: {'Authorization': 'Bearer SxLSHXkVB7zFMm22BEK6' }
      })
      .then(response => response.json())
      .then(characters => this.characters = characters)
    }
  },
  mounted(){
    this.fetchCharacter();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
