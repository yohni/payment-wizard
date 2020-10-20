<template>
  <div class="home">
    <Container class="home__container">
      <div class="home__status">
        <Status :actived="currentState" :status="status" />
      </div>
      <PaymentCard class="card" :state="currentState" :handleClick="goBack">
        <Row class="row">
          <div class="row__switch">
            <keep-alive>
              <component
                ref="currentStep"
                :is="currentStep"
                :reset="resetState"
                @update="collectForm"
              />
            </keep-alive>
          </div>
          <CheckoutSummary
            class="row__summary"
            :status="currentState"
            :isLastStep="isLastStep"
            :handleClick="goNext"
            :allowNext="allowNext"
            :checkoutForm="form"
          />
        </Row>
      </PaymentCard>
    </Container>
  </div>
</template>

<script>
// @ is an alias to /src
import Container from '@/components/layouts/MyContainer.vue';
import PaymentCard from '@/components/PaymentCard.vue';
import CheckoutDelivery from '@/components/CheckoutDelivery.vue';
import CheckoutPayment from '@/components/CheckoutPayment.vue';
import CheckoutFinish from '@/components/CheckoutFinish.vue';
import CheckoutSummary from '@/components/CheckoutSummary.vue';
import Row from '@/components/layouts/MyRow.vue';
import Status from '@/components/StateProgress.vue';

export default {
  name: 'Home',
  components: {
    PaymentCard,
    Container,
    CheckoutDelivery,
    CheckoutPayment,
    CheckoutSummary,
    CheckoutFinish,
    Row,
    Status,
  },
  data() {
    return {
      allowNext: false,
      currentState: 1,
      steps: [CheckoutDelivery, CheckoutPayment, CheckoutFinish],
      status: [
        {
          id: 1,
          name: 'Delivery',
        },
        {
          id: 2,
          name: 'Payment',
        },
        {
          id: 3,
          name: 'Finish',
        },
      ],
      form: {
        name: null,
        phone: null,
        address: null,
        dropshipper: {
          name: null,
          phone: null,
        },
        shipment: null,
        payment: null,
      },
    };
  },
  // mounted() {
  //   if (localStorage.currentState) {
  //     this.currentState = localStorage.currentState;
  //   }
  // },
  computed: {
    currentStep() {
      return this.steps[this.currentState - 1];
    },
    length() {
      return this.steps.length;
    },
    isLastStep() {
      return this.currentState === 3;
    },
  },
  methods: {
    collectForm(item) {
      Object.assign(this.form, item.data);
      this.allowNext = item.valid;
      // localStorage.setItem('form', this.form);
    },
    goBack() {
      this.currentState -= 1;
      // localStorage.currentState = this.currentState;
      this.allowNext = true;
    },
    goNext() {
      this.currentState += 1;
      // localStorage.currentState = this.currentState;
      this.allowNext = !this.$refs.currentStep.$v.$invalid;
    },
    resetState() {
      // localStorage.currentState = 1;
      // localStorage.form = null;
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../theme/breakpoints';

.home {
  &__container {
    .row {
      &__switch {
        width: 75%;

        +media-break-point-down($md) {
          width: 100%;
        }
      }

      &__summary {
        width: 25%;

        +media-break-point-down($md) {
          width: 100%;
        }
      }
    }
  }

  &__status {
    display: flex;
    justify-content: center;
  }
}
</style>
