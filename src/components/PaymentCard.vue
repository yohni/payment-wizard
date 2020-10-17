<template>
  <div class="card card-shadow">
    <div class="card-body card-body-p-20">
      <div class="card__nav nav nav-align-left">
        <a href="/" class="nav__back-button">
          <img
            src="../assets/icons/arrow_back.svg"
            alt=""
            class="nav__back-button__icon"
          />
          Back to cart</a
        >
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
};
</script>

<style lang="stylus">
@import '../styles';

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

      &__back-button__icon {
        margin: 0 10px;
      }
    }
  }
}
</style>
