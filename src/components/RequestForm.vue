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
              name="fullname"
              placeholder="Full Name"
            >
          </div>
          <label>Email Address</label>
          <div class="request-form__input-container">
            <input
              class="request-form__input"
              type="email"
              placeholder="email@emailaddress.com"
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
       width: 100%;
       box-shadow: 0px 3px 17px 0px rgba(0, 0, 5, 0.32);
       @media screen and (min-width: 1023px) {
         max-width: 450px;
       }
    }
    &__title {
      font-size: 1.5rem;
      font-family: ShermanSerif, Georgia, serif;
      font-weight: normal;
      margin-bottom: .75rem;
    }
    &__legend {
      margin-bottom: 1rem;
      width: 100%;
      text-align: center;
    }
    &__form {
      width: 100%;
    }
    &__fieldset {
      border: none;
    }
    &__input {
      width: 100%;
      border: none;
      padding: .25rem;
      &:focus {
        outline: none;
      }
      &-container {
        margin-bottom: 1rem;
        border: 1px solid $su-light-gray;
        padding: .5rem;
      }
    }
    &__select {
      width: 100%;
      border: none;
      height: 100%;
      padding-left: .5rem;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      &:focus {
        outline: none;
      }
      &-container {
        border: 1px solid $su-light-gray;
        height: 43px;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          color: $su-medium-gray;
          left: 16px;
        }
        &::after {
          content: '';
          -moz-transform: rotate(-45deg);
          -ms-transform: rotate(-45deg);
          -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
          position: absolute;
          right: 16px;
          bottom: 40%;
          display: block;
          width: .625em;
          height: .625em;
          border: 3px solid $su-medium-gray;
          border-top: none;
          border-right: none;
          border-radius: 2px;
          z-index: 3;
          transition: all 125ms ease-out;
        }
        &:focus-within::after {
          -moz-transform: rotate(-225deg);
          -ms-transform: rotate(-225deg);
          -webkit-transform: rotate(-225deg);
          transform: rotate(-225deg);
          top: 45%;
        }
      }
    }
    &__footer {
      width: 100%;
      margin-top: 1.5rem;
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
