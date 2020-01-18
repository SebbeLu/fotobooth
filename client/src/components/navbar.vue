<template>
  <b-navbar class='is-primary'>
    <template slot='start'>
      <b-navbar-item @click='onImages' href='#'>
        <fa-icon icon='images'/>Bilder
      </b-navbar-item>
    </template>
    <template slot='end'>
      <b-navbar-item tag='div'>
        <div class='buttons'>
          <a class='button is-secondary'>
           <fa-icon icon='cog'/>
            <strong>Einstellungen</strong>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
export default {
  name: 'navbar',
  data () {
    return {}
  },
  methods: {
    onImages () {
      this.$router.push({ name: 'Gallery' })
    }
  }
}
</script>
<style scoped>
</style>
