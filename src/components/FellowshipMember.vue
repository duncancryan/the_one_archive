<template>
  <li>
      <p>{{member.Name}}</p>
  </li>
</template>

<script>
export default {
    name: 'fellowship-member',
    props: ['member']
}
</script>

<style>

</style>