<template>
  <div id="app">
    <h1>
      The One Archive to Rule Them All
    </h1>
    <label for="character_select">View Character</label>
    <input type="text" placeholder="Begin typing name" list="characters" id="character_select" v-model="selectedCharacter">
    <datalist id="characters">
      <option disabled value="">Begin typing character name...</option>
      <option v-for="(character, index) in characters" :key="index" :data-value="character" :value="character.Name"></option>
    </datalist>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return{
    characters: [],
    selectedCharacter: null,
    fellowship: []
    }
  },
  components: {

  },
  methods: {
    fetchCharacter: function () {
      fetch('https://the-one-api.dev/v2/character?limit=200', {
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
h1{
  font-family: 'Cinzel Decorative', cursive;
  color: rgb(168, 196, 66);
  text-align: center;
}
body{
  background-image: url('https://i.imgur.com/FkKmWVk.jpeg');
  background-size: cover;
}
</style>
