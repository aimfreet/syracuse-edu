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
          <div class="info-cards__card-overlay">
            <h3 class="info-cards__card-title">
              Programs
            </h3>
          </div>
        </div>
      </a>
    </div>
    <div
      class="info-cards__column"
    >
      <div class="info-cards__card event-card">
        <h3 class="info-cards__event-card-title">
          Upcoming Deadlines &amp; Events
        </h3>
        <p>
          The application deadline for Summer 2020 programs is February 10;
          deadline for Fall 2020 programs is March 15.
        </p>
        <p>
          Check out our <a href="http://suabroad.syr.edu/who-are-you/interested-students/">Interested Students</a>
          page to schedule an appointment with an advisor or request
          more information about our programs.
        </p>
        <p><a href="#">See Calendar</a></p>
      </div>
    </div>
    <div
      class="info-cards__column"
    >
      <a
        href="#"
        class="info-cards__card-link"
      >
        <div class="info-cards__card advisor-card">
          <div class="info-cards__card-overlay">
            <h3 class="info-cards__card-title">
              Meet With An Advisor
            </h3>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
  .info-cards {
    margin-top: 2rem;
    margin-bottom: 2rem;
    @include flex-column;
    @media screen and (min-width: 1024px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 275px;
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
      padding: 1.5rem;
      position: relative;
      height: 275px;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      margin-bottom: 1.5rem;
      @media screen and (min-width: 1024px) {
        margin: 0;
      }
      &-title {
        font-size: 1.5rem;
      }
      &-link {
        display: flex;
        width: 100%;
        text-decoration: none;
        color: $white;
        position: relative;
      }
      &-overlay {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: rgba(0,0,0,0.5);
        align-items: center;
        width: 100%;
        height: 275px;
      }
    }
    &__event-card-title {
      font-size: 1.125rem;
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
    color: $su-dark-gray;
    font-size: .875rem;
    box-shadow: 0px 3px 17px 0px rgba(0, 0, 5, 0.32);
  }
  .advisor-card {
    background-image: url('../assets/images/AdvisorsSU.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    color: $white;
    @include flex-column-center;
  }
</style>
