<template>
  <div class="hero-banner">
    <div class="hero-banner__content">
      <intro-card />
      <request-form />
    </div>
  </div>
</template>

<script>
import IntroCard from './IntroCard.vue';
import RequestForm from './RequestForm.vue';

export default {
  components: {
    IntroCard,
    RequestForm,
  },
};
</script>

<style lang="scss">
    .hero-banner {
        width: 100%;
        height: 400px;
        background-image: url('../assets/images/FlorenceSU.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top center;
        @include flex-column-center;
        position: relative;
         @media screen and (min-width: 1023px) {
            height: 100vh;
            padding: 2rem;
         }
        &__content {
            position: absolute;
            top: 270px;
            left: 0;
            margin: 0 1.5rem;
            @media screen and (min-width: 1023px) {
                width: 100%;
                height: 100%;
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-column-gap: 2rem;
                position: relative;
                top: 0;

            }
        }
    }
</style>
