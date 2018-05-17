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
            <router-link to="/technologies" class="nav__a">технологии</router-link>              
            <router-link to="/" class="nav__a">проекты</router-link>   
          </nav>
        </div> 
        <div class="grid__col header__item">
          <a href="/ru" class="header__lang">Ru</a>
          /
          <a href="/en" class="header__lang">En</a>
        </div>      
      </div>
    </header>
    <form action="" class="form">
      <input type="text" class="input form__input">
      <input type="text" class="input form__input">
      <input type="text" class="input form__input">
      <button type="submit" class="button form__button">
        отправить заявку
      </button>
    </form>
    
  </div> 
</template>

<script>
  export default {
    name: 'Homepage',
    template: '<Homepage/>',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  
</style>





























