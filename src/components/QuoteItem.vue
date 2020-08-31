<template>
  <ul id="quote-flex">
      <li>
          <p>{{quote.dialog}}</p>
      </li>
  </ul>
</template>

<script>
export default {
    name: 'quote-item',
    props: ['quote']
}
</script>

<style>
#quote_flex{
    display: flex;
}
</style>