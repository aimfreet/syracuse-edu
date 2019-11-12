<template>
  <div class="info-cards">
    <div
      class="info-cards__column"
    >
      <a
        href="#"
        class="info-cards__card-link"
      >
        <div class="info-cards__card program-card">
          <h3 class="info-cards__card-title">
            Programs
          </h3>
        </div>
      </a>
    </div>
    <div
      class="info-cards__column"
    >
      <div class="info-cards__card event-card">
        <h3 class="info-cards__card-title">
          Upcoming Deadlines &amp; Events
        </h3>
      </div>
    </div>
    <div
      class="info-cards__column"
    >
      <div class="info-cards__card">
        <h3 class="info-cards__card-title">
          Meet With An Advisor
        </h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .info-cards {
    margin-top: 2rem;
    margin-bottom: 2rem;
    @include flex-column;
    @media screen and (min-width: 1023px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 250px;
      grid-column-gap: 2rem;
      margin-left: 2rem;
      margin-right: 2rem;
    }
    &__column {
      @include flex-row;
      justify-content: center;
    }
    &__card {
      width: 100%;
      padding: 2rem;
      height: 250px;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      margin-bottom: 1.5rem;
      @media screen and (min-width: 1023px) {
        margin: 0;
      }
      &-title {

      }
      &-link {
        display: flex;
        width: 100%;
        text-decoration: none;
      }
    }
  }
  .program-card {
    background-image: url('../assets/images/ProgramsSU.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    color: $white;
    @include flex-column-center;
  }
  .event-card {
    background-color: $su-light-gray;
    color: $su-dark-gray;
  }
</style>
