<template>
  <div class="page-footer">
    <p>© Syracuse University. <em>Knowledge crowns those who seek her.</em></p>
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
    padding: 2rem 1rem;
    font-size: .875rem;
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
