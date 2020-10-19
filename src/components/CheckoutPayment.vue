<template>
  <div class="payment">
    <Row class="payment__row row">
      <div class="payment_header row--padding-10">
        <H1>Shipment</H1>
      </div>
    </Row>
    <div class="payment__shipment payment__shipment--mb-30">
      <FloatSelect
        :options="shipmentOptions"
        :selectedValue="pickedShipment"
        @setvalue="setShipment"
      />
    </div>
    <Row class="payment__row row">
      <div class="payment_header row--padding-10">
        <H1>Payment</H1>
      </div>
    </Row>
    <div class="payment__via payment__via--mb-30">
      <FloatSelect
        :options="viaOptions"
        :selectedValue="pickedVia"
        @setvalue="setVia"
      />
    </div>
  </div>
</template>

<script>
import Row from '@/components/layouts/MyRow.vue';
import H1 from '@/components/MainHeading.vue';
import FloatSelect from '@/components/FloatSelect.vue';

export default {
  name: 'CheckoutPayment',
  components: {
    H1,
    Row,
    FloatSelect,
  },
  data() {
    return {
      shipmentOptions: [
        {
          id: 1,
          name: 'GO-SEND',
          value: 15000,
        },
        {
          id: 2,
          name: 'JNE',
          value: 9000,
        },
        {
          id: 3,
          name: 'Personal Courier',
          value: 29000,
        },
      ],
      viaOptions: [
        {
          id: 1,
          name: 'e-Wallet',
          value: 1500000,
        },
        {
          id: 2,
          name: 'Bank Transfer',
          value: null,
        },
        {
          id: 3,
          name: 'Virtual Account',
          value: null,
        },
      ],
      pickedShipment: '',
      pickedVia: '',
    };
  },
  methods: {
    setShipment(selectedItem) {
      this.pickedShipment = selectedItem;
    },
    setVia(selectedItem) {
      this.pickedVia = selectedItem;
    },
  },
};
</script>

<style lang="stylus" scoped>
.payment {
  &__row .row {
    &--padding-10 {
      padding: 30px 10px;
    }
  }

  &__shipment--mb-30 {
    margin-bottom: 30px;
  }

  &__via--mb-30 {
    margin-bottom: 30px;
  }
}
</style>
