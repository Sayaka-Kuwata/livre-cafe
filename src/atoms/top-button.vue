<template>
  <button v-show="buttonActive" @click="toTop" class="top-button"></button>
</template>

<script>
export default {
  name: "TopButton",
  mounted() {
    window.addEventListener("scroll", this.comeButton);
  },
  data() {
    return {
      buttonActive: false,
      scroll: 0,
    };
  },
  methods: {
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    comeButton() {
      const top = 100;
      this.scroll = window.scrollY;
      if (top <= this.scroll) {
        this.buttonActive = true;
      } else {
        this.buttonActive = false;
      }
    },
  },
};
</script>

<style lang="scss">
@use "/src/assets/scss/global" as global;
@use "/src/assets/scss/foundation/variable" as var;

button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 65px;
  height: 65px;
  background-color: var.$color-primary;
  border-radius: 50%;
  border: 2px solid rgb(0, 100, 0);
  opacity: 0.8;
}

.top-button {
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  &::before {
    width: 20px;
    height: 20px;
    border-top: 3px solid var.$color-white;
    border-right: 3px solid var.$color-white;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 5px;
    left: 22px;
  }
}
</style>
