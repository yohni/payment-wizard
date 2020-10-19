<template>
  <div class="field">
    <input
      :type="type"
      :name="name"
      :id="name"
      class="field__input"
      :placeholder="label"
    />
    <label :for="name" class="field__label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'FloatInput',
  props: ['type', 'name', 'label'],
};
</script>

<style lang="stylus" scoped>
@import '../theme/colors';

.field {
  display: flex;
  text-align: left;
  align-items: flex-start;
  flex-flow: column-reverse;

  &__input, &__label {
    transition: all 0.2s;
    touch-action: manipulation;
    font-family: Inter, sans-serif;
  }

  &__label {
    font-weight: 500;
    font-size: 13px;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  &__input {
    border: 1px solid $thinGrey;
    --webkit-appearance: none;
    max-width: 100%;
    cursor: text;
    padding: 25px 15px 15px 15px;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 700;
    width: 100%;

    &::placeholder {
      font-weight: 500;
    }

    &:focus {
      outline: none;

      &::-webkit-input-placeholder {
        opacity: 1;
      }
    }

    &:placeholder-shown + .field__label {
      cursor: text;
      max-width: 66.66%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transform-origin: left bottom;
      transform: translate(15px, 40px) scale(1.23);
      opacity: 0.4;
    }

    &:not(:placeholder-shown) + .field__label, &:focus + .field__label {
      transform: translate(15px, 24px) scale(1);
      cursor: pointer;
    }
  }
}

::-webkit-input-placeholder {
  opacity: 0;
  transition: inherit;
}
</style>
