<template>
  <div class="page-footer">
    <p>© Syracuse University. Knowledge crowns those who seek her.</p>
    <p class="page-footer__span">
      |
    </p>
    <p>Accessibility Accreditation Emergencies Privacy</p>
  </div>
</template>

<style lang="scss">
  .page-footer {
    background: $su-dark-gray;
    color: $white;
    @include flex-column-center;
    text-align: center;
    padding: .5rem 1rem;
    @media screen and (min-width: 1024px) {
      @include flex-row-center;
    }
    &__span {
      display: none;
      @media screen and (min-width: 1024px) {
        padding: 0 1rem;
        display: inline;
      }
    }
  }
</style>
