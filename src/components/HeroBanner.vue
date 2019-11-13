<template>
  <div class="hero-banner">
    <div class="hero-banner__image" />
    <div class="hero-banner__tagline">
      Study Abroad
    </div>
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
        position: relative;
        &__image {
            background-image: url('../assets/images/FlorenceSU.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: bottom center;
            width: 100%;
            height: 400px;
            @include flex-column-center;
            position: relative;
            @media screen and (min-width: 1024px) {
                height: 100vh;
                padding: 2rem;
                background-position: top center;
            }
        }
        &__tagline {
            position: absolute;
            top: 0;
            margin-top: 3rem;
            background: #d74100;
            color: white;
            font-size: 32px;
            padding: .5rem 1rem;
        }
        &__content {
            position: relative;
            margin-top: -150px;
            margin-left: 1.5rem;
            margin-right: 1.5rem;
            @media screen and (min-width: 1024px) {
                width: 100%;
                height: 100%;
                display: grid;
                margin: 0;
                grid-template-columns: 1fr 1fr;
                grid-column-gap: 2rem;
                top: 0;
                position: absolute;
                left: 0;
            }
        }
    }
</style>
