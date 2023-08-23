<template>
 <div class="modal-mask">
  <div class="modal-wrapper">
    <div class="modal-container">

      <div class="modal-header">
        <slot name="header">
          Add Movie
        </slot>
      </div>  

      <div class="modal-body">
        <slot name="body">
          <label for="">Title</label>
          <input type="text" v-model="form.title">

          <label for="poster" class="poster">Choose Poster</label>
          <input type="file" id="poster" style="display: none;">

          <label for="">Director</label>
          <input type="text" v-model="form.director">

          <label for="">Year</label>
          <input type="text" v-model="form.year">
        </slot>
      </div>

      <div class="modal-footer">
        <slot name="footer">
          <button class="modal-default-button" @click="$emit('submit', form)">
            Submit
          </button>
          <button class="modal-default-button" @click="$emit('close')">
            Close
          </button>
        </slot>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  title: '',
  poster: null,
  director: '',
  year: null
})
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  color: black;
  h3 {
    margin-top: 0;
  }
}

.modal-body {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  label {
    margin-top: 10px;
    color: black;
    font-size: 16px;
  }
  input {
    padding: 3px;
    border-radius: 10px;
    border: 1px solid grey;
    outline: none;
  }
  .poster {
    cursor: pointer;
    text-decoration: underline;
  }
}

.modal-default-button {
  padding: 10px;
  cursor: pointer;
}

.modal-default-button:nth-child(1) {
  margin-right: 10px;
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>