import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// // Ready translated locale messages
const translations = {
  en: {
  },
  fr: {
  }
}

// // Create VueI18n instance with options
export default new VueI18n({
  translations // set locale messages
})

