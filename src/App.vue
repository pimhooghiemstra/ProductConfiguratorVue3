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

#app {
  margin: 0 auto;
  font-weight: normal;
}
</style>
