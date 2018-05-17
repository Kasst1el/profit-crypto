<template>
  <div id="app">
    <Homepage/>
    <router-view/>
  </div>
</template>

<script>
  import Router from 'vue-router'
  import Homepage from '@/components/Homepage'

  export default {
    components: {
      Homepage,
      Router
    }
  }
</script>

<style src="../node_modules/normalize.css/normalize.css"></style>
<style>
  @font-face {
      font-family: "RoadRadio";
      src: url("./assets/fonts/roadradio/RoadRadio.ttf") format("truetype");
      font-weight: 400;
      font-style: normal;
  }
  @font-face {
      font-family: "RoadRadio";
      src: url("./assets/fonts/roadradio/RoadRadio-Bold.ttf") format("truetype"),
        url("./assets/fonts/roadradio/RoadRadio-Bold.woff") format("woff");
      font-weight: 700;
      font-style: normal;
  }
  @font-face {
      font-family: "RoadRadio";
      src: url("./assets/fonts/roadradio/RoadRadio-Light.ttf") format("truetype"),
        url("./assets/fonts/roadradio/RoadRadio-Light.woff") format("woff");
      font-weight: 300;
      font-style: normal;
  }
  @font-face {
      font-family: "CourierNew";
      src: url("./assets/fonts/courier-new/CourierBold.ttf") format("truetype");
      font-weight: 700;
      font-style: normal;
  }
  * {
    box-sizing: border-box;
  }
  body {
    background: #0C0C0C;
    width: 100%;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    font-family: "RoadRadio", sans-serif;
  }
  .bg-lines {
    position: absolute;
    z-index: -1;
    width: 100vw;
    height: 100vh;
  }
  .bg-lines div {
    position: absolute;
    height: 100vh;
    width: 2px;
    background: rgba(255, 255, 255, 0.1);
  }
  .bg-lines__1 {
    left: calc(10% - 1px);
  }
  .bg-lines__2 {
    left: calc(30% - 1px);
  }
  .bg-lines__3 {
    left: calc(50% - 1px);
  }
  .bg-lines__4 {
    left: calc(70% - 1px);
  }
  .bg-lines__5 {
    left: calc(90% - 1px);
  }
  .grid {
    width: 100vw;
    padding: 0 10vw;
    display: flex;
    flex-wrap: wrap;
  }
  .grid__col {
    width: 20vw;
  }
  .header {
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    top: 2.5em;
    z-index: 20;
  }
  .logo {
    width: 7.5em;
  }
  .header__item {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    position: relative;
  }
  .menu-icon {
    position: relative;  
    width: 15px;
    height: 15px;
    cursor: pointer; 
  }
  .menu-icon__item {
    position: absolute;
    width: 5px;
    height: 5px;
    background: #fff;
  }
  .menu-icon__item:nth-child(0){
    left: 0;
    top: 0;
  }
  .menu-icon__item:nth-child(1){
    right: 0;
    top: 0;
  }
  .menu-icon__item:nth-child(2){
    left: 0;
    bottom: 0;
  }
  .menu-icon__item:nth-child(3){
    right: 0;
    bottom: 0;
  }
  .header__nav {
    margin-left: auto;
  }
  .nav__a {
    font-size: 0.625em;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    line-height: 1;
  }
  .nav__a:last-child {
    margin-left: 2.75em;
  }
  .header__item:last-child {
    margin-left: auto;
    justify-content: flex-end;    
    font-size: 0.625em;
  }
  .header__lang {
    color: #fff;    
    text-transform: uppercase;
    text-decoration: none;
  }
  .header__lang:first-child {
    padding-right: 0.5em;
  }
  .header__lang:last-child {
    padding-left: 0.5em;
  }
  .form {
    z-index: 20;
    position: absolute;
    left: 30vw;
    bottom: 0;
    width: 20vw;
    overflow: hidden;
  }
  .button {
    width: 100%;
    height: 3.625em;
    background: #fff;
    font-family: "CourierNew", sans-serif;
    font-weight: 700;
    cursor: pointer;
    font-size: 1em;
    letter-spacing: 1px;
    text-transform: uppercase;
    outline: none;
    box-shadow: none;
  }
  .input {
    
  }
  .form__input {
    display: none;
  }
  @media screen and (max-width: 1920px) {
    body {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 1440px) {
    body {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 1200px) {
    body {
      font-size: 12px;
    }
  }
</style>
