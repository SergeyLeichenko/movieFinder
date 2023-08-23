<script setup>
</script>

<template name="header">
  <div class="header">
    <p class="header__title">
      MovieFinder
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';
.header {
  background-color: $grey;
  padding: 20px 0;
  &__title {
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    color: $white;
    letter-spacing: 1px;
  }
}
</style>
