<template>
  <div class="request-form">
    <div class="request-form__content">
      <h2 class="request-form__title">
        Want More Information?
      </h2>
      <form
        id="requestForm"
        class="request-form__form"
      >
        <fieldset class="request-form__fieldset">
          <legend class="request-form__legend">
            Request a viewbook or join our mailing list.
          </legend>
          <label>Name</label>
          <div class="request-form__input-container">
            <input
              class="request-form__input"
              type="text"
              placeholder="Full Name"
            >
          </div>
          <label>Email Address</label>
          <div class="request-form__input-container">
            <input
              class="request-form__input"
              type="text"
            >
          </div>
          <label>Study Location</label>
          <div class="request-form__select-container">
            <select class="request-form__select">
              <option
                v-for="location in studyLocations"
                :key="location.locationName"
              >
                {{ location.locationName }}
              </option>
            </select>
          </div>
        </fieldset>
      </form>
      <footer class="request-form__footer">
        <button
          type="submit"
          form="requestForm"
          value="Request Info"
          class="request-form__button"
        >
          Request Info
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      studyLocations: [
        { locationName: 'Florence, Italy' },
        { locationName: 'Hong Kong, China' },
        { locationName: 'London, England' },
        { locationName: 'Santiago, Chile' },
        { locationName: 'Strasbourg, France' },
        { locationName: 'Central Europe' },
      ],
    };
  },
};
</script>

<style lang="scss">
  .request-form {
     @include flex-column-center;
    &__content {
       background-color: $white;
       padding: 1.5rem;
       @include flex-column;
       align-items: center;
       max-width: 450px;
       box-shadow: 0px 3px 17px 0px rgba(0, 0, 5, 0.32);
    }
    &__title {
      font-size: 1.5rem;
      font-family: ShermanSerif, Georgia, serif;
      font-weight: normal;
      margin-bottom: 1rem;
    }
    &__legend {
      margin-bottom: 1rem;
    }
    &__fieldset {
      border: none;
    }
    &__input {
      width: 100%;
      padding: .5rem;
      margin-bottom: 1rem;
    }
    &__footer {
      width: 100%;
      margin-top: 1rem;
    }
    &__button {
      border: none;
      background-color: $su-dark-orange;
      color: $white;
      @include flex-row;
      justify-content: center;
      padding: .75rem 0;
      width: 100%;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
    }
  }
</style>
