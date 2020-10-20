<template>
  <div class="finish">
    <div class="finish__wrap">
      <H1 class="finish__heading">Thank you</H1>
      <div class="finish__order-id">ORDER ID: XXKYB</div>
      <p class="finish__info">
        Your order will be delivered today with GO-SEND
      </p>
      <button type="button" class="finish__btn" @click="reset">
        <span class="material-icons finish__btn__icon">
          keyboard_backspace
        </span>
        Go to homepage
      </button>
    </div>
  </div>
</template>

<script>
import H1 from '@/components/MainHeading.vue';

export default {
  name: 'CheckoutFinish',
  components: {
    H1,
  },
  props: ['reset'],
};
</script>

<style lang="stylus" scoped>
@import '../theme/colors';

.finish {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 75vh;

  &__wrap {
    text-align: left;
  }

  &__heading {
    margin-bottom: 24px;
  }

  &__order-id {
    margin-bottom: 9px;
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: $originBlack;
  }

  &__info {
    margin-bottom: 60px;
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 14px;
  }

  &__btn {
    font-family: Inter;
    font-weight: 500;
    font-size: 14px;
    color: $originBlack;
    mix-blend-mode: normal;
    opacity: 0.6;
    outline: none;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      opacity: 0.8;
    }

    &__icon {
      margin-right: 4px;
    }
  }
}
</style>
