<template>
  <div id="app">
    <h1>
      The One Archive to Rule Them All
    </h1>
    <character-filter-form :characters="characters"></character-filter-form>
    <character-detail :character="selectedCharacter"></character-detail>
    <user-fellowship></user-fellowship>
  </div>
</template>

<script>
import CharacterFilterForm from './components/CharacterFilterForm.vue';
import CharacterDetail from './components/CharacterDetail.vue';

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
    "character-filter-form": CharacterFilterForm,
    "character-detail": CharacterDetail
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
