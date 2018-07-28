<template>
<div id="app" class="container">
    <section class="banner">
      <div class="banner__content">
        <strong>ВНИМАНИЕ!</strong>
    Обновлённый ассортимент и актуальные цены см. на сайте <a href="http://www.maketir74.ru">maketir74.ru</a>
      </div>
      <i class="banner__close material-icons">close</i>
    </section>
    <header class="header">
      <div class="logo">
        <img class="logo__img" src="img/logo_pure.png" alt="">
        <div class="logo__brand">
          <h1 class="logo__name">МAKETиР</h1>
          <p class="logo__moto">Ваши идеи - в реальные вещи!</p>
        </div>
      </div>
      <form class="search">
        <input class="search__input" type="text">
        <button class="search__button">
          <i class="material-icons search__ico">search</i>
        </button>
      </form>
    </header>
    <main-menu/>
    <router-view/>
    <footer class="footer">Футер</footer>
</div>
</template>

<script>
import MainMenu from './components/MainMenu'

export default {
  name: 'App',
  components: {
    MainMenu
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300');
*,
*:after,
*:before {
    margin: 0;
    border: 0;
    box-sizing: border-box;
}
body{
  font-family: 'Roboto', sans-serif;
}
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
}
.banner {
  display: flex;
  justify-content: space-between;
  padding: 5px;
  color: white;
  background-color: #434334;
  order: 1;
}
.banner strong {
  color: black;
}
.banner a {
  color: lightblue;
}
.banner i {
  cursor: pointer;
}
.banner_hidden {
  display: none;
}
.header {
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  order: 2;
  padding: 5px;
}
.header > * {
  flex: 1 100%;
}
.logo {
  flex: 1 auto;
  display: flex;
}
.logo__brand {
  padding-left: 8px;
}
.logo__name {
  font-family: Times;
  font-size: 60px;
  font-variant: small-caps;
  font-weight: 300;
  color: #0078ba;
  line-height: 48px;
}
.search {
  flex: 0 auto;
  position: relative;
}
.search__input {
  border: 1px solid black;
  height: 36px;
  line-height: 36px;
  font-size: 16px;
  border-radius: 18px;
  padding-left: 15px;
}
.search__button {
  position: absolute;
  right: 0;
  top: 5px;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
}
.footer {
  order: 5;
}

@media (max-width: 600px) {
  .content {
    order: 3;
  }
  .footer {
    display: none;
  }
}
</style>
