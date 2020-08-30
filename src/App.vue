<template>
  <div id="app">
    <h1>
      The One Archive to Rule Them All
    </h1>
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
      .then(characters => this.characters = characters.docs)
    }
  },
  mounted(){
    this.fetchCharacter();
  }
}
</script>

<style>

</style>
