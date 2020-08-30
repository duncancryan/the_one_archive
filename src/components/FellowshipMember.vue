<template>
  <li>
      <p>{{member.Name}}</p>
      <button v-on:click="handleClick">Remove</button>
  </li>
</template>

<script>
import { eventBus } from '../main.js'

export default {
    name: 'fellowship-member',
    props: ['member'],
    methods: {
        handleClick: function() {
            eventBus.$emit('member-removed', this.member)
        }
    }
}
</script>

<style>

</style>