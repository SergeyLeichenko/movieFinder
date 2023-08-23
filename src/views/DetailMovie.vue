<template>
  <div class="details">
    <router-link class="go-to-back" to="/" @click="goToBack">Back to home page</router-link>

    <div class="details__block" v-if="detail.value">
      <h2 class="details__block_title">{{ detail.value.Title }}</h2>
      <img :src="detail.value.Poster" :alt="detail.value.Title" :title="detail.value.Title" class="details__block_img">
      <p class="details__block_director">{{ detail.value.Director }}</p>
      <p class="details__block_year">{{ detail.value.Released }}</p>
    </div>
    
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
const detail = reactive({})

const goToBack = () => {
  localStorage.removeItem('movie-detail')
}

onMounted(() => {
  if (localStorage.getItem('movie-detail')) {
    try {
      detail.value = JSON.parse(localStorage.getItem('movie-detail'))
    } catch (e) {
      localStorage.removeItem('movie-detail')
    }
  }
})
</script>

<style lang="scss" scoped>
.details {
  margin-top: 20px;
  .go-to-back {
    margin-left: 20px;
  }
  &__block {
    width: 300px;
    margin: auto;
    display: flex;
    flex-direction: column;
    &_img {
      width: 300px;
      height: 400px;
      margin-bottom: 10px;
    }
    &_title {
      text-align: center;
    }
    &_director,
    &_year {
      font-weight: 600;
    }
  }
}
</style>