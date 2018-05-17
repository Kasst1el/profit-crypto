<template>
  <div class="home">
    <div class="bg-lines">
      <div class="bg-lines__1"></div>
      <div class="bg-lines__2"></div>
      <div class="bg-lines__3"></div>
      <div class="bg-lines__4"></div>
      <div class="bg-lines__5"></div>
    </div>
    <header class="header">
      <div class="grid">
        <div class="grid__col header__item">
          <router-link to="/" class="nav__a">
            <img src="../assets/img/header/logo.svg" alt="" class="logo">
          </router-link>
        </div> 
        <div class="grid__col header__item">
          <div class="menu-icon">
            <div class="menu-icon__item"></div>
            <div class="menu-icon__item"></div>
            <div class="menu-icon__item"></div>
            <div class="menu-icon__item"></div>
          </div>
          <nav class="nav header__nav">
            <router-link to="/technologies" class="nav__a" >{{ $t("message.technologies") }}</router-link>              
            <router-link to="/projects" class="nav__a">{{ $t("message.projects") }}</router-link>   
          </nav>
        </div> 
        <div class="grid__col header__item">
         <a class='header__lang' v-on:click="switchLocaleToRu()">ru</a>
          /
         <a class='header__lang' v-on:click="switchLocaleToEn()">en</a>
        </div>      
      </div>
    </header>
    <form action="" class="form">
      <input type="text" class="input form__input">
      <input type="text" class="input form__input">
      <input type="text" class="input form__input">
      <button type="submit" class="button form__button">
        {{ $t("message.send_an_application") }}
      </button>
    </form>    
  </div> 
</template>

<script>



  export default {
    name: 'Homepage',
    template: '<Homepage/>',
    methods: {
      switchLocaleToRu: function(){
        this.$i18n.locale = 'ru'
      },
      switchLocaleToEn: function(){
        this.$i18n.locale = 'en'
      }
    }
  }
  // switchLocale(){
  //   if (this.$i18n.locale === 'ru') {
  //     this.$i18n.locale = 'en'
  //   } else {
  //     this.$i18n.locale = 'ru'
  //   }
  // }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  
</style>





























