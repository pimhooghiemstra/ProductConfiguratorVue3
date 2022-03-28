<script setup>
import MainNav from './components/MainNav.vue'
import PostCardConfigurator from './components/configurator/PostCardConfigurator.vue'
</script>

<template>
  <div id="app">
    <MainNav />
    <PostCardConfigurator />
  </div>
</template>

<style>
@import './assets/base.css';

.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  width: 750px;
}

@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}

@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
</style>
