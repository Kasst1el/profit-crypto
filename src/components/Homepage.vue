<template>
  <div class="home">    
    <header class="header">
      <div class="grid">
        <div class="grid__col header__item logo">
          <router-link to="/" class="nav__a">
            <img src="../assets/img/header/logo.svg" alt="" class="logo__img">
          </router-link>
        </div> 
        <div class="grid__col header__item header__item_menu">
          <div class="menu-icon">
            <div class="menu-icon__item"></div>
            <div class="menu-icon__item"></div>
            <div class="menu-icon__item"></div>
            <div class="menu-icon__item"></div>
          </div>
          <nav class="nav header__nav">
            <router-link to="/technologies" class="nav__a nav__a_first" >{{ $t("message.technologies") }}</router-link>               
            <router-link to="/projects" class="nav__a nav__a_last">{{ $t("message.projects") }}</router-link>   
          </nav>
        </div> 
        <div class="grid__col header__item header__item_lang">
         <a class='header__lang' v-on:click="switchLocaleToRu()">ru</a>
          /
         <a class='header__lang' v-on:click="switchLocaleToEn()">en</a>
        </div>      
      </div>
    </header>




    <div class="menu__line menu__line_1">
    </div>
    <div class="menu__line menu__line_2">
      <div class="menu__header logo">
        <router-link to="/" class="nav__a">
          <img src="../assets/img/header/logo_black.svg" alt="" class="logo__img">
        </router-link>
      </div>
      <router-link to='/solutions' class="menu__link">
        <div class="menu-hover">
          <h3 class="menu__desc">
            Наши<br>
            решения
          </h3>
          <img class="menu__img" src='../assets/img/menu/chevron_white.svg'>
        </div>

        <h3 class="menu__desc">
          Наши<br>
          решения
        </h3>
        <img class="menu__img" src='../assets/img/menu/chevron.svg'>
      </router-link>
      <router-link to='/problems' class="menu__link">
        <div class="menu-hover">
          <h3 class="menu__desc">
            Какие<br>
            проблемы<br>
            Вас могут<br>
            ожидать?
          </h3>
          <img class="menu__img" src='../assets/img/menu/chevron_white.svg'>
        </div>
        <h3 class="menu__desc">
          Какие<br>
          проблемы<br>
          Вас могут<br>
          ожидать?
        </h3>
        <img class="menu__img" src='../assets/img/menu/chevron.svg'>
      </router-link>
    </div>



    <div class="menu__line menu__line_3">
      <div class="menu__header">
        <div class="menu-icon">
          <div class="menu-icon__item"></div>
          <div class="menu-icon__item"></div>
          <div class="menu-icon__item"></div>
          <div class="menu-icon__item"></div>
        </div>
      </div>
      <router-link to='/technologies' class="menu__link">
        <div class="menu-hover">
          <h3 class="menu__desc">
            Технологии
          </h3>
          <img class="menu__img" src='../assets/img/menu/chevron_white.svg'>
        </div>
        <h3 class="menu__desc">
          Технологии
        </h3>
        <img class="menu__img" src='../assets/img/menu/chevron.svg'>
      </router-link>
      <router-link to='/offers' class="menu__link menu__link_offers">
        <div class="menu-hover">
          <h3 class="menu__desc">
            Что мы<br>предлaгаем
          </h3>
          <img class="menu__img" src='../assets/img/menu/chevron_white.svg'>
        </div>
        <h3 class="menu__desc">
          Что мы<br>предлaгаем
        </h3>
        <img class="menu__img" src='../assets/img/menu/chevron.svg'>
      </router-link>
    </div>



    <div class="menu__line menu__line_4">  
      <router-link to='/projects' class="menu__link">
        <div class="menu-hover">
          <h3 class="menu__desc">
            Наши<br>проекты
          </h3>
          <img class="menu__img" src='../assets/img/menu/chevron_white.svg'>
        </div>
        <h3 class="menu__desc">
          Наши<br>проекты
        </h3>
        <img class="menu__img" src='../assets/img/menu/chevron.svg'>
      </router-link>   
    </div>



    <div class="menu__line menu__line_5 header__item_lang">
      <div class="menu__header">
        <a class='header__lang' v-on:click="switchLocaleToRu()">ru</a>
        <span>/</span>
        <a class='header__lang' v-on:click="switchLocaleToEn()">en</a>
      </div>
      <router-link to='/partners' class="menu__link">
        <div class="menu-hover">
          <h3 class="menu__desc">
            Наши<br>партнеры
          </h3>
          <img class="menu__img" src='../assets/img/menu/chevron_white.svg'>
        </div>
        <h3 class="menu__desc">
          Наши<br>партнеры
        </h3>
        <img class="menu__img" src='../assets/img/menu/chevron.svg'>
      </router-link>       
    </div>
    <div class="menu__line menu__line_6">      
    </div>





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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  
</style>





























