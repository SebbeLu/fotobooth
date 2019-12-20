import Api from '@/services/Api'

export default {
  focus (credentials) {
    return Api().post('focus', credentials)
  },
  shot (credentials) {
    return Api().post('shot', credentials)
  }
}
