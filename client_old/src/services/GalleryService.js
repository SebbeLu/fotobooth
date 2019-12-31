import Api from '@/services/Api'

export default {
  imageList () {
    return Api().get('images')
  },
  image (credentials) {
    return Api().get('images', credentials)
  }
}
