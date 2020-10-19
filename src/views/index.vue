<template>
  <div class="home">
    <Container class="home__container">
      <div class="home__status">
        <Status />
      </div>
      <PaymentCard class="card" :state="currentState">
        <Row class="row">
          <div class="row__switch">
            <CheckoutDelivery v-if="currentState === 1" />
            <CheckoutPayment v-if="currentState === 2" />
            <CheckoutFinish v-if="currentState === 3" />
          </div>
          <CheckoutSummary class="row__summary" />
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
      currentState: 3,
    };
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
