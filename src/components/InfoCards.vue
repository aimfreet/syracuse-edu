<template>
  <div class="info-cards">
    <div
      class="info-cards__column"
    >
      <h3>Programs</h3>
    </div>
    <div
      class="info-cards__column"
    >
      test
    </div>
    <div
      class="info-cards__column"
    >
      test
    </div>
  </div>
</template>

<style lang="scss">
  .info-cards {
    @include flex-column;
    @media screen and (min-width: 1023px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
    &__column {
      @include flex-row;
      justify-content: center;
    }
  }
</style>
