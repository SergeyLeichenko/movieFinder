<template>
  <div class="wrap">

    <div class="wrap__search">
      <button class="btn-add-movie" @click="showAddMovie = true">Add Movie</button>
      <div class="block-search">
        <input type="text" v-model="search" class="search" placeholder="search movie" @keyup.enter="getMovie"/>
        <button class="btn-search" @click="getMovie">search</button>
      </div>
    </div>

    <FormAddMovie v-if="showAddMovie" @close="showAddMovie = false" @submit="submitMovie($event)"/>

    <div class="wrap__card-movie">
      <div
        class="movie"
        v-for="item in movies.value"
        :key="item.imdbID"
        @click="detailMovie(item.Title)"
        >
        <div class="movie_title">{{ item.Title }}</div>
        <div class="movie_img">
          <img :src="item.Poster" :alt="item.Title" :title="item.Title" />
        </div>
        <div class="movie_type-year">
          <p class="type t">{{ item.Type }}</p>
          <p class="year t">{{ item.Year }}</p>
        </div>
      </div>
    </div>

    <div class="no-results" v-if="hideResuts">
      <p class="warning">{{ notMovie }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import FormAddMovie from '../main/FormAddMovie.vue'

const router = useRouter()
const url = ref('https://www.omdbapi.com/')
const search = ref('')
const movies = reactive([])
const notMovie = ref('')
const hideResuts = ref(false)
const showAddMovie = ref(false)

const getMovie = async () => {
  await axios.get(`${url.value}?s=${search.value}&apikey=9b67fc54`)
    .then((res) => {
      localStorage.setItem('movies', JSON.stringify(res.data.Search))
      movies.value = res.data.Search

      if (res.data.Response === "False") {
        notMovie.value = res.data.Error
        hideResuts.value = true
      }
    })
    .catch((error) => {
      console.error(error)
    })

  search.value = ''
}

const detailMovie = async (item) => {
  await axios.get(`${url.value}?t=${item}&apikey=9b67fc54`)
  .then((res) => {
    localStorage.setItem('movie-detail', JSON.stringify(res.data))
    router.push({ name: 'detail-movie' })
    console.log(res)
  })
  .catch((error) => {
    console.error(error)
  })
}

const submitMovie = (event) => {
  console.log(event.title)
}

onMounted(() => {
  if (localStorage.getItem('movies')) {
    try {
      movies.value = JSON.parse(localStorage.getItem('movies'))
    } catch (e) {
      localStorage.removeItem('movies')
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';
.wrap {
  margin-top: 40px;
  flex-grow: 1;
  &__search {
    display: flex;
    justify-content: space-around;
    .btn-add-movie {
      padding: 10px;
      cursor: pointer;
    }
    .block-search {
      width: 60%;
      .search {
        width: 50%;
        padding: 10px;
        outline: none;
        border: 1px solid $grey;
        border-radius: 20px 0 0 20px;
      }
      .btn-search {
        width: 70px;
        border-radius: 0 20px 20px 0;
        border: 1px solid $grey;
        padding: 10px;
        cursor: pointer;
        &:hover {
          background-color: $grey;
          color: $white;
        }
      }
    }
  }
  &__card-movie {
    display: flex;
    flex-wrap: wrap;
    .movie{
      display: flex;
      flex-direction: column;
      width: 200px;
      margin: 40px 40px;
      color: $black;
      cursor: pointer;
      &_title {
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: 600;
        height: 50px;
        text-align: center;
        align-items: center;
        display: flex;
        justify-content: center;
      }
      &_img {
        width: 200px;
        height: 300px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      &_type-year {
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
        .t {
          font-size: 16px;
          font-weight: 600;
        }
      }
    }
  }
  .no-results {
    display: block;
    text-align: center;
    margin-top: 40px;
    .warning {
      font-size: 24px;
      font-weight: 600;
      color: $red;
    }
  }
}
</style>