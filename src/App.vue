<template>
  <div id="app">
    <h1>
      The One Archive to Rule Them All
    </h1>
    <character-filter-form :characters="characters"></character-filter-form>
    <button v-if="!fellowship.includes(selectedCharacter)" v-on:click="addToFellowship">Add To Fellowship</button>
    <button v-on:click="fetchQuotes">See Quotes</button>
    <div id="detail-container">
    <character-detail :character="selectedCharacter" :characterQuotes="characterQuotes"></character-detail>
    <user-fellowship :fellowship="fellowship"></user-fellowship>
    </div>
  </div>
</template>

<script>
import CharacterFilterForm from './components/CharacterFilterForm.vue';
import CharacterDetail from './components/CharacterDetail.vue';
import UserFellowship from './components/UserFellowship.vue'
import {eventBus} from './main.js';

export default {
  name: 'App',
  data() {
    return{
    characters: [],
    selectedCharacter: null,
    fellowship: [],
    characterQuotes: []
    }
  },
  components: {
    "character-filter-form": CharacterFilterForm,
    "character-detail": CharacterDetail,
    "user-fellowship": UserFellowship
  },
  methods: {
    fetchCharacter: function () {
      fetch('https://the-one-api.dev/v2/character', {
        method: 'GET',
        headers: {'Authorization': 'Bearer SxLSHXkVB7zFMm22BEK6' }
      })
      .then(response => response.json())
      .then(characters => this.characters = characters.docs)
    },

    fetchQuotes: function() {
      fetch(`https://the-one-api.dev/v2/character/${this.selectedCharacter._id}/quote`, {
        method: 'GET',
        headers: {'Authorization': 'Bearer SxLSHXkVB7zFMm22BEK6' }
      })
      .then(response => response.json())
      .then(quotes => this.characterQuotes = quotes.docs)
    },

    addToFellowship: function () {
      this.fellowship.push(this.selectedCharacter);
    },

    removeFellowshipMember: function() {
      eventBus.$on('member-removed', (member) => {
        const index = this.fellowship.indexOf(member);
        this.fellowship.splice(index, 1);
      })
    }
  },
  mounted(){
    this.fetchCharacter();
    this.removeFellowshipMember();

    eventBus.$on('character-selected', (character) => {
      this.selectedCharacter = character
    })
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
button{
  margin-left: 10%;
}
#detail-container{
  display: flex;
}
</style>
