<template>
  <div class="select__item" :class="{ select__item__selected: selected }">
    <div class="select__item--padding">
      <div
        class="select__item__name"
        :class="{ 'select__item__name__no-value': !option.value }"
      >
        {{ option.name }}
      </div>
      <div v-if="option.value" class="select__item__value">
        {{ option.value }} <span v-if="option.name === 'e-Wallet'"> left</span>
      </div>
      <span v-if="selected" class="select__item__icon material-icons"
        >check</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'FloatSelectItem',
  props: ['option', 'selected'],
};
</script>

<style lang="stylus" scoped>
@import '../theme/colors';
@import '../theme/breakpoints';

.select__item {
  border: 2px solid $thinGrey;
  max-width: 180px;
  width: 100%;
  margin: 0 10px;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;

  &__selected {
    background-color: rgba(27, 217, 123, 0.1);
    border: 2px solid $successGreen;

    .select__item__name {
      opacity: 0.8;
    }

    .select__item__value {
      opacity: 1;
    }
  }

  &--padding {
    padding: 12px 15px;
  }

  &__name {
    font-weight: 500;
    font-size: 13px;
    mix-blend-mode: normal;
    opacity: 0.6;
    margin-bottom: 2px;

    &__no-value {
      font-size: 16px;
      padding-top: 9px;
    }
  }

  &__value {
    font-weight: bold;
    font-size: 16px;
    color: $darkNavy;
    mix-blend-mode: normal;
    opacity: 0.6;
  }

  &__icon {
    position: absolute;
    top: 21px;
    right: 15px;
    font-size: 18px;
    color: $successGreen;
  }
}
</style>
