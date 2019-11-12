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
      introTitle: 'Lorem Ipsum Dolar',
      introText: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /><br />Aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Dictumst vestibulum rhoncus est pellentesque.
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
      max-width: 450px;
      border-left: 6px solid $su-medium-gray;
      box-shadow: 0px 3px 17px 0px rgba(0, 0, 5, 0.32);
      margin-bottom: 2rem;
    }
    &__title {
      font-size: 2rem;
      font-family: ShermanSerif, Georgia, serif;
      font-weight: normal;
    }
  }
</style>
