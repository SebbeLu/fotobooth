<template>
  <b-button @click="onStart" class="is-primary">{{action}}</b-button>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      action: 'Start'
    }
  },
  methods: {
    onStart () {
      this.$router.push({name: 'Countdown'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
