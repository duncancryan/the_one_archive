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

  </div>
</template>

<script>
export default {
    name: 'character-detail',
    props: ['character']
}
</script>

<style>
#characterDetail{
    margin-left: 10%;
    font-family: 'Tangerine', cursive;
    color: rgb(149, 235, 29);
    display: flex;
}

a{
    text-decoration-color: rgb(223, 76, 223);
}

</style>