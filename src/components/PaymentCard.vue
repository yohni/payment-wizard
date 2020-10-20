<template>
  <div class="card card-shadow">
    <div class="card-body card-body-p-20">
      <div v-if="state !== 3" class="card__nav nav nav-align-left">
        <button
          href="/"
          @click="handleClick"
          class="nav__back-button"
          :disabled="state < 2"
        >
          <span class="material-icons nav__back-button__icon">
            keyboard_backspace
          </span>
          Back to {{ state === 2 ? 'delivery' : 'cart' }}
        </button>
      </div>
      <div class="card__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentCard',
  props: ['state', 'handleClick'],
};
</script>

<style lang="stylus">
@import '../styles';
@import '../theme/breakpoints';

.card {
  background: $originWhite;
  border-radius: 4px;

  &-shadow {
    box-shadow: 2px 10px 20px rgba(255, 138, 0, 0.1);
  }

  .card-body {
    &-p-20 {
      padding: 20px;
    }

    .nav {
      font-weight: 500;
      font-size: 14px;
      font-family: Inter;
      display: flex;
      align-items: center;

      &-align-left {
        text-align: left;
      }

      &__back-button {
        display: flex;
        align-items: center;
        mix-blend-mode: normal;
        opacity: 0.6;
        transition: all 0.2s;
        outline: none;
        background: none;
        border: none;
        cursor: pointer;

        +media-break-point-down($md) {
          margin-top: 24px;
        }

        &:hover {
          opacity: 0.8;
        }

        &__icon {
          margin: 0 10px;
        }
      }
    }
  }
}
</style>
