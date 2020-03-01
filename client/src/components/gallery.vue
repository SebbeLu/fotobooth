<template>
  <div>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
    ></div>
  </div>
</template>

<script>
import VueGallery from 'vue-gallery'
import GalleryService from '@/services/GalleryService'

export default {
  data: function () {
    return {
      images: [],
      index: null
    }
  },
  mounted () {
    var self = this
    GalleryService.imageList().then(function (response) {
      response.data.forEach(function (item, index) {
        if (item.match(/.jpg/) || item.match(/.JPG/)) {
          self.images.push(process.env.VUE_APP_SERVER + 'images/' + item)
        }
      })
    })
  },
  components: {
    gallery: VueGallery
  }
}
</script>

<style scoped>
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
</style>
