<template>
  <div class="delivery">
    <Row class="delivery__row header">
      <div class="header__heading">
        <H1>Delivery details</H1>
      </div>
      <div class="header__checkbox checkbox">
        <input id="aDropshipper" class="checkbox__input" type="checkbox" />
        <label for="aDropshipper" class="checkbox__label">
          Send as dropshipper
        </label>
      </div>
    </Row>

    <div class="delivery__form form">
      <div class="form__padding">
        <Row class="row">
          <div class="col-size-7">
            <FloatInput
              type="text"
              name="name"
              id="name"
              class="input__name input__name--mr-2"
              label="Name"
            />
            <FloatInput
              type="text"
              name="phone"
              id="phone"
              class="input__name input__name--mr-2"
              label="Phone Number"
            />
            <FloatTextarea
              type="text"
              name="address"
              id="address"
              class="input__name input__name--mr-2"
              label="Delivery Address"
            />
          </div>
          <div class="col-size-5">
            <FloatInput
              type="text"
              name="drop_name"
              id=""
              class="input__name input_name"
              label="Dropshipper name"
            />
            <FloatInput
              type="text"
              name="drop_number"
              id="drop_number"
              class="input__name input_name"
              label="Dropshipper phone number"
            />
          </div>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
import Row from '@/components/layouts/MyRow.vue';
import H1 from '@/components/MainHeading.vue';
import FloatInput from '@/components/FloatInput.vue';
import FloatTextarea from '@/components/FloatTextarea.vue';

export default {
  name: 'CheckoutDelivery',
  components: {
    FloatInput,
    FloatTextarea,
    Row,
    H1,
  },
};
</script>

<style lang="stylus" scoped>
@import '../theme/colors';
@import '../theme/breakpoints';

.delivery {
  .header {
    justify-content: space-between;
    align-items: center;
    padding: 24px 10px;

    .checkbox {
      height: 22px;

      &__input {
        position: absolute;
        left: -9999px;
      }

      &__label {
        position: relative;
        padding-left: 30px;
        cursor: pointer;
        font-family: Inter, sans-serif;
        color: $darkNavy;
        font-weight: 500;
        font-size: 14px;
        mix-blend-mode: normal;
        opacity: 0.8;

        &:before {
          content: '';
          position: absolute;
          left: 0px;
          top: -2px;
          width: 18px;
          height: 18px;
          border: 2px solid $calmGrey;
          transition: all 0.2s;
        }

        &:after {
          font-family: 'Material Icons';
          content: 'check';
          line-height: 18px;
          font-size: 18px;
          width: 18px;
          height: 18px;
          position: absolute;
          top: 0px;
          left: 2px;
          display: inline-block;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #09ad7e;
          transition: all 0.2s;
        }
      }

      &__input:not(:checked) + .checkbox__label:after {
        opacity: 0;
        transform: scale(0);
      }

      &__input:checked + .checkbox__label:after {
        opacity: 1;
        transform: scale(1);
      }

      &__input:checked + .checkbox__label:before {
        border-color: $successGreen;
      }
    }
  }

  &__form .form {
    &__padding {
      padding: 0 10px;

      .row {
        .col {
          &-size-7 {
            max-width: 60%;
            width: 100%;

            +media-break-point-down($md) {
              max-width: 100%;
            }

            .input__name {
              &--mr-2 {
                margin-right: 30px;

                +media-break-point-down($md) {
                  margin-right: 0;
                }
              }
            }
          }

          &-size-5 {
            max-width: 40%;
            width: 100%;

            +media-break-point-down($md) {
              max-width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
