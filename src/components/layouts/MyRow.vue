<template>
  <div class="row">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Row',
};
</script>

<style lang="stylus" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
}
</style>
