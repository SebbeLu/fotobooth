<template>
  <div>
    <h1 class="is-size-2">{{header}}</h1>
    <h1 class="is-size-2">{{seconds}}</h1>
  </div>
</template>

<script>
import CameraService from '@/services/CameraService'
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
        CameraService.shot()
        this.$router.go(-1)
      }
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

</style>
