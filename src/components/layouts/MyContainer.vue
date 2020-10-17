<template>
  <div class="container container-mx-auto">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container',
};
</script>

<style lang="stylus" scoped>
@import '../../theme/breakpoints';

.container {
  max-width: 1100px;

  +media-break-point-down($xl) {
    max-width: 960px;
  }

  +media-break-point-down($lg) {
    max-width: 720px;
  }

  +media-break-point-down($md) {
    max-width: 540px;
  }

  +media-break-point-down($sm) {
    max-width: 100%;
  }

  &-mx-auto {
    margin: 0 auto;
  }
}
</style>
