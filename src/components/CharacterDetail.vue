<template>
  <div v-if="character" id="characterDetail">
      <div id="detailWrapper">
          <h2>
              {{character.Name}}
          </h2>
          <p><span>Race:</span>{{character.Race}}</p>
          <p><span>Realm:</span>{{character.realm}}</p>
          <p><span>Birth:</span>{{character.birth}}</p>
          <p><span>Death:</span>{{character.death}}</p>
          <p>
              <a href="character.Url"></a>
          </p>
      </div>

  </div>
</template>

<script>
export default {
    name: 'character-detail',
    props: ['character']
}
</script>

<style>
#detailWrapper{
    text-align: center;
}
</style>