<template>
  <div id="app">
    <Navbar/>
    <h1 class="is-size-1 has-text-centered">{{name}}</h1>
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
      name: 'Mach ein Foto :)'
    }
  }
}
</script>
<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";
// Set your colors
$primary: #89BD9E;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
