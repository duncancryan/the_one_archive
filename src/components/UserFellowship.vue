<template>
  <div id="fellowship-list">
      <ul>
          <h2>My Fellowship</h2>
          <fellowship-member v-for="(member, index) in fellowship" :key="index" :member="member"></fellowship-member>
      </ul>
  </div>
</template>

<script>
import FellowshipMember from './FellowshipMember.vue'

export default {
    name: 'user-fellowship',
    props: ['fellowship'],
    components: {
        'fellowship-member': FellowshipMember
    }
}
</script>

<style>
ul{
    list-style: none;
    color: violet;
}

#fellowship-list{
    flex-grow: 1;
    margin-right: 5%;
}
</style>