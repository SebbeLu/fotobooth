<template>
  <div id="app">
    <Navbar/>
    <h1 class="is-size-1">{{name}}</h1>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data () {
    return {
      name: 'Fotobox'
    }
  }
}
</script>
<style lang="scss">
</style>
