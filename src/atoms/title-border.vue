<template>
  <FadeIncomponent>
    <h2 class="title-border c-flex">
      <slot name="title-text"></slot>
    </h2>
  </FadeIncomponent>
</template>

<script>
import FadeIncomponent from "@/atoms/fade-in";
export default {
  name: "TitleBorder",
  components: {
    FadeIncomponent,
  },
};
</script>

<style lang="scss">
@use "/src/assets/scss/global" as global;
@use "/src/assets/scss/foundation/variable" as var;

h2 {
  @include global.font-40-bold(var.$color-black);
  text-align: center;
  font-family: "Exo 2", sans-serif;
  letter-spacing: 0.2rem;
}

.title-border {
  align-items: center;
  &::before,
  &::after {
    content: "";
    display: block;
    flex-grow: 1;
    height: 3px;
    background: var.$color-black;
  }
  &::before {
    margin-right: 10px;
  }
  &::after {
    margin-left: 10px;
  }
}

@include global.media-query("sp") {
  h2 {
    font-size: 32px;
    letter-spacing: 0.15rem;
  }
}
</style>
