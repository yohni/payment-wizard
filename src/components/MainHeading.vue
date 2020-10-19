<template>
  <div class="heading">
    <h1 class="heading__h1">
      <slot />
    </h1>
    <hr class="heading__line" />
  </div>
</template>

<script>
export default {
  name: 'H1',
};
</script>

<style lang="stylus" scoped>
@import '../theme/colors';

.heading {
  &__h1 {
    font-family: Montserrat, sans-serif;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    color: $originCoral;
    margin-bottom: -22px;
    margin-top: 0px;
    text-align: left;
  }

  &__line {
    height: 8px;
    min-width: 300px;
    width: 100%;
    background: $thinGrey;
    border: none;
    z-index: 12;
  }
}
</style>
