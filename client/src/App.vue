<template>
  <div id="app">
    <Navbar/>
    <div class="hero is-secondary is-fullheight is-bold">
    <div class="hero-body">
    <div class="container has-text-centered">
    <router-view/>
    </div>
    </div>
    </div>
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
$primary: #2A9D8F;
$primary-invert: findColorInvert($primary);
$secondary: rgb(255, 230, 166);
$secondary-invert: findColorInvert($secondary);
$red: #E76F51;
$red-invert: findColorInvert($red);

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
    "secondary":($secondary, $secondary-invert),
    "red":($red, $red-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
