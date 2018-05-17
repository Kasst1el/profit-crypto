// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Homepage from './components/Homepage'
import router from './router'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

Vue.config.productionTip = false

const messages = {   
  en: {     
    message: {       
      technologies: 'technologies',
      projects: 'projects',
      send_an_application: 'send an application'       
    }   
  },   
  ru: {     
    message: {       
      technologies: 'технологии',
      projects: 'проекты',
      send_an_application: 'отправить заявку'     
    }   
  } 
}
 
const i18n = new VueI18n({
  locale: 'ru', 
  messages
})

/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})



