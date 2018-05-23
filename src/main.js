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
      send_an_application: 'send an application',
      send: 'send'         
    }   
  },   
  ru: {     
    message: {       
      technologies: 'технологии',
      projects: 'проекты',
      send_an_application: 'отправить заявку',
      send: 'отправить'     
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



var menuOpened = false,
    menuAnimation = true;
$('.menu-icon').click(function(){
  
  if(menuAnimation){
    menuAnimation = false;
    if(!menuOpened){
      $('body').addClass('is-menu');
      menuOpened = true;
      $('.header .header__item').removeClass('is-active');
    } else {
      $('body').addClass('is-menu_close');

      setTimeout(function(){
        $('.header .logo').addClass('is-active');
      }, 470);

      setTimeout(function(){
        $('.header .header__item_menu').addClass('is-active');
      }, 540);

      setTimeout(function(){
        $('.header .header__item_lang').addClass('is-active');
      }, 680);

      setTimeout(function(){
        $('body').removeClass('is-menu_close is-menu');
      }, 750);

      menuOpened = false;
    }
    setTimeout(function(){
      menuAnimation = true;
    }, 750);
  }  
})

















