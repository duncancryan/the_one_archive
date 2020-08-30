<template>
  <form v-on:submit.prevent>
      <label for="search-bar">Find Character: </label>
      <input id="search-bar" type="text" v-model="search" placeholder="Search for character..." v-on:keyup="searchForCharacter">
      <select v-on:change="handleSelect" v-model="selectedCharacter">
          <option disabled value="">Begin typing...</option>
          <option v-for="(character, index) in characters" :key="index" :value="character">{{character.Name}}</option>
      </select>
  </form>
</template>

<script>
import { eventBus } from '../main.js';

export default {
    name: 'character-filter-form',
    data(){
        return {
            "search": "",
            "selectedCharacter": {}
        }
    },
    props: ['characters'],
    methods: {
        searchForCharacter: function () {
            let foundCharacter = this.characters.find((character) => {
              return character.Name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
            })
            this.selectedCharacter = foundCharacter

            eventBus.$emit('character-selected', this.selectedCharacter)
        },
        handleSelect: function () {
            this.search = ""
            eventBus.$emit('character-selected', this.selectedCharacter)
        }
    }
}
</script>

<style>

</style>