<template>
  <div class="select">
    <Row class="select__row">
      <FloatSelectItem
        v-for="item in options"
        :key="item.id"
        :option="item"
        :selected="selectedValue.id === item.id"
        @click="$emit('setvalue', item)"
      />
    </Row>
  </div>
</template>

<script>
import FloatSelectItem from '@/components/FloatSelectItem.vue';
import Row from '@/components/layouts/MyRow.vue';

export default {
  components: {
    FloatSelectItem,
    Row,
  },
  props: ['options', 'selectedValue'],
  methods: {
    setPickedData(value) {
      this.pickedData = value;
    },
  },
};
</script>

<style lang="stylus" scoped>
.select {
  width: 100%;
}
</style>
