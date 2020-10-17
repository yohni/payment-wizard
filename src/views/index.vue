<template>
  <div class="home">
    <Container>
      <PaymentCard> <CheckoutDetail /> </PaymentCard>
    </Container>
  </div>
</template>

<script>
// @ is an alias to /src
import Container from '@/components/layouts/MyContainer.vue';
import PaymentCard from '@/components/PaymentCard.vue';
import CheckoutDetail from '@/components/CheckoutDetail.vue';

export default {
  name: 'Home',
  components: {
    PaymentCard,
    Container,
    CheckoutDetail,
  },
};
</script>

<style lang="stylus" scoped>
@import '../theme/breakpoints';
</style>
