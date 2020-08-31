<template>
  <div v-if="character" id="characterDetail">
      <div id="detailWrapper">
          <h2>
              {{character.Name}}
          </h2>
          <p><span>Race: </span>{{character.Race}}</p>
          <p><span>Realm: </span>{{character.realm}}</p>
          <p><span>Birth: </span>{{character.birth}}</p>
          <p><span>Death: </span>{{character.death}}</p>
          <p>
              <a href="character.Url">Wiki Page</a>
          </p>
      </div>
      <div id="quote-wrapper">
      <quote-item v-for="(quote, index) in characterQuotes" :key="index" :quote="quote"></quote-item>
      </div>

  </div>
</template>

<script>
import QuoteItem from './QuoteItem.vue';
import { eventBus } from '../main.js';

export default {
    name: 'character-detail',
    props: ['character', 'characterQuotes'],
    components: {
        'quote-item': QuoteItem
    },
}
</script>

<style>
#characterDetail{
    margin-left: 5%;
    font-family: 'Tangerine', cursive;
    color: rgb(149, 235, 29);
    display: flex;
}

#detail-wrapper{
    flex-grow: 4;
}
#quote-wrapper{
    flex-grow: 6;
}

a{
    text-decoration-color: rgb(223, 76, 223);
}
</style>