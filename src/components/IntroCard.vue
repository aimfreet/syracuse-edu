<template>
  <div class="intro-card">
    <div class="intro-card__card">
      <h1 class="intro-card__title">
        {{ introTitle }}
      </h1>
      <div
        class="intro-text"
      >
        <!--eslint-disable-next-line vue/no-v-html-->
        <p v-html="introText" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      introTitle: 'Where will you go?',
      introText: `
      Syracuse University Abroad consistently ranks among the highest-quality international study programs in the country.<br/><br>Students who choose Syracuse Abroad’s programs prepare for the world in the world with invaluable internships, Signature Seminars, language study at all levels, homestays, and community engagement projects.
      `,
    };
  },
};
</script>


<style lang="scss">
  .intro-card {
    @include flex-column-center;
    &__card {
      background: $white;
      padding: 1.5rem;
      color: $su-dark-gray;
      border-left: 6px solid $su-medium-gray;
      box-shadow: 0px 3px 17px 0px rgba(0, 0, 5, 0.32);
      margin-bottom: 2rem;
      @media screen and (min-width: 1024px) {
        max-width: 450px;
        margin: 0;
      }
    }
    &__title {
      font-size: 1.75rem;
      font-family: ShermanSerif, Georgia, serif;
      font-weight: normal;
      @media screen and (min-width: 1024px) {
        font-size: 2rem;
      }
    }
  }
</style>
