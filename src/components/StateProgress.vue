<template>
  <div class="status">
    <div
      class="status__item"
      :class="{ status__item__actived: item.id <= actived }"
      v-for="item in status"
      :key="item.id"
    >
      <div class="status__item__no">{{ item.id }}</div>
      <div class="status__item__name">{{ item.name }}</div>
      <span
        v-if="item.id < status.length"
        class="material-icons status__item__arrow"
        >keyboard_arrow_right</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ['status', 'actived'],
};
</script>

<style lang="stylus" scoped>
@import '../theme/colors';
@import '../theme/breakpoints';

.status {
  display: flex;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter, sans-serif;
  color: $originCoral;
  background: $smoothCoral;
  border-radius: 35px;
  padding: 20px 28px;
  transform: translateY(35px);

  &__item {
    display: flex;
    align-items: center;

    &__actived {
      .status__item {
        &__no {
          background: $originCoral;
          color: $originWhite;
        }

        &__name {
          +media-break-point-down($sm) {
            font-weight: bold;
          }
        }
      }
    }

    &__no {
      width: 30px;
      height: 30px;
      background: rgba(253, 140, 63, 0.2);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      margin: 0 10px;

      +media-break-point-down($sm) {
        display: none;
      }
    }

    &__name {
    }

    &__arrow {
      margin-left: 20px;

      +media-break-point-down($sm) {
        margin-left: 0px;
      }
    }
  }
}
</style>
