<template>
  <div class="request-form">
    <div class="request-form__content">
      <h2>Want More Information?</h2>
      <form
        id="requestForm"
        class="request-form__form"
      >
        <fieldset class="request-form__fieldset">
          <legend>Request a viewbook or join our mailing list.</legend>
          <label>Name</label>
          <div class="request-form__input-container">
            <input
              class="request-form__input"
              type="text"
              placeholder="Full Name"
            >
          </div>
          <label>Email Address</label>
          <input
            class="request-form__input"
            type="text"
          >
          <label>Study Location</label>
          <select class="request-form__select">
            <option
              v-for="location in studyLocations"
              :key="location.locationName"
            >
              {{ location.locationName }}
            </option>
          </select>
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
    &__fieldset {
      @include flex-column;
      border: none;
    }
    &__input {
      width: 100%;
      padding: .5rem;
      margin-bottom: 1rem;
    }
  }
</style>
