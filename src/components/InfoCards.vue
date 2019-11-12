<template>
  <div class="info-cards">
    <div
      class="info-card"
    >
      <h3>Programs</h3>
    </div>
    <div
      class="info-card"
    >
      test
    </div>
    <div
      class="info-card"
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
  }
  .info-card {

  }
</style>
