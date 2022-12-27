<template>
  <div class="guide-detail">
    <p>{{ text }}</p>
    <img :src="url" />
    <div class="floor-guide-title">
      <p>{{ title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FloorGuideDetail",
  props: ["text", "url", "title"],
};
</script>

<style lang="scss">
@use "/src/assets/scss/global" as global;
@use "/src/assets/scss/foundation/variable" as var;

.guide-detail {
  text-align: center;
  p {
    @include global.font-80-bold(var.$color-black);
    text-align: left;
    margin: 0 0 24px 150px;
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
</style>
