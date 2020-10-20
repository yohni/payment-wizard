<template>
  <div class="field">
    <textarea
      :type="type"
      :name="name"
      :id="name"
      class="field__input"
      :class="{
        field__input__invalid: invalid && touched,
        field__input__success: !invalid && touched,
      }"
      :placeholder="label"
      v-model="inputVal"
    ></textarea>
    <label :for="name" class="field__label">{{ label }}</label>
    <span v-if="invalid && touched" class="field__icon material-icons"
      >close</span
    >
    <span v-if="!invalid && touched" class="field__icon material-icons"
      >check</span
    >
  </div>
</template>

<script>
export default {
  name: 'FloatTextarea',
  props: ['type', 'name', 'label', 'value', 'invalid', 'touched'],
  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('model', val);
      },
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../theme/colors';

.field {
  display: flex;
  text-align: left;
  align-items: flex-start;
  flex-flow: column-reverse;
  position: relative;

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
    min-height: 120px;
    cursor: text;
    padding: 25px 15px 15px 15px;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 700;
    width: 100%;

    &__invalid {
      border-color: $originCoral;

      &~^[0] {
        &__label, &__icon {
          color: $originCoral;
        }
      }
    }

    &__success {
      border-color: $successGreen;

      &~^[0] {
        &__label, &__icon {
          color: $successGreen;
        }
      }
    }

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

  &__icon {
    position: absolute;
    right: 15px;
    top: 21px;
    font-size: 18px;
  }
}

::-webkit-input-placeholder {
  opacity: 0;
  transition: inherit;
}
</style>
