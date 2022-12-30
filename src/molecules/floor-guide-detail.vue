<template>
  <div class="guide-detail">
    <img :src="url" />
    <div class="floor-guide-title">
      <p>{{ title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FloorGuideDetail",
  props: ["url", "title"],
};
</script>

<style lang="scss">
@use "/src/assets/scss/global" as global;
@use "/src/assets/scss/foundation/variable" as var;

.guide-detail {
  text-align: center;
  position: relative;
  &::before {
    counter-increment: number 1;
    content: counter(number) "F";
    @include global.font-90-bold;
    font-family: "Exo 2", sans-serif;
    letter-spacing: 0.3rem;
    position: absolute;
    top: -60px;
    left: 150px;
  }
  img {
    margin-bottom: 32px;
  }
}

.floor-guide-title {
  p {
    @include global.font-40-bold(var.$color-black);
    margin: 0 0 24px;
    text-align: center;
  }
}

@include global.media-query("pc-sp") {
  .guide-detail {
    &::before {
      top: -100px;
      left: 100px;
    }
  }
}

@include global.media-query("tb") {
  .guide-detail {
    &::before {
      top: -120px;
      left: 80px;
    }
  }
}

@include global.media-query("tb-small") {
  .guide-detail {
    &::before {
      font-size: 80px;
      left: 0px;
    }
  }
}

@include global.media-query("sp") {
  .guide-detail {
    &::before {
      font-size: 60px;
      top: -70px;
    }
    img {
      margin-bottom: 24px;
    }
  }

  .floor-guide-title {
    p {
      font-size: 24px;
      margin-bottom: 8px;
    }
  }
}
</style>
