<template>
  <b-navbar class='is-light'>
    <template slot='start'>
      <b-navbar-item href='#'>
        <b-icon pack='fas' icon='iamges'></b-icon>Bilder
      </b-navbar-item>
    </template>
    <template slot='end'>
      <b-navbar-item tag='div'>
        <div class='buttons'>
          <a class='button is-primary'>
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
  }
}
</script>
<style scoped>
</style>
