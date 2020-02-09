<template>
<div>
  <h1 class="is-size-1 is-white"><fa-icon icon="camera-retro"/></h1>
  <h1 class="is-size-1 is-white">{{text}}</h1>
  <b-button @click="onStart" class="is-large is-primary">{{action}}</b-button>
</div>
</template>

<script>
export default {
  name: 'Start',
  data () {
    return {
      action: 'Cheeeese!',
      text: 'Mach ein Foto!:)'
    }
  },
  methods: {
    onStart () {
      this.$router.push({ name: 'Countdown' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: rgb(206, 206, 206);
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
