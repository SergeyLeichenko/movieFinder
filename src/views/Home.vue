<template>
  <div class="container">
    <Header />

    <Main />

    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/base/Header.vue'
import Footer from '../components/base/Footer.vue'
import Main from '../components/main/Main.vue'
</script>

<style scoped lang="scss">
@import '../assets/style/variables.scss';
.container {
  margin: 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
