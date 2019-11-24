<template>
  <div>
    <h1>{{header}}</h1>
    <h1>{{seconds}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Countdown',
  timer: null,
  data () {
    return {
      header: 'Countdown',
      seconds: '5'
    }
  },
  mounted () {
    this.timer = setInterval(() => this.countdown(), 1000)
  },
  methods: {
    countdown () {
      this.seconds--
      if (this.seconds <= 0) {
        clearInterval(this.timer)
        this.$router.go(-1)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
