<template>
  <section id="Floor">
    <TitleBorder>
      <template v-slot:title-text>FLOOR GUIDE</template>
    </TitleBorder>
    <div class="floor-guide-wrapper">
      <Literature />
      <Art />
      <Living />
    </div>
  </section>
</template>

<script>
import TitleBorder from "@/atoms/title-border";
import Literature from "@/components/literature";
import Art from "@/components/art";
import Living from "@/components/living";

export default {
  name: "FloorGuide",
  components: {
    TitleBorder,
    Literature,
    Art,
    Living,
  },
};
</script>

<style lang="scss">
@use "/src/assets/scss/global" as global;
@use "/src/assets/scss/foundation/variable" as var;

.floor-guide-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 0 80px;
  counter-reset: number 0;
}

@include global.media-query("tb-small") {
  .floor-guide-wrapper {
    padding: 80px;
  }
}

@include global.media-query("sp") {
  .floor-guide-wrapper {
    max-width: 100%;
    padding: 40px 0;
    margin: 0 20px;
  }
}
</style>
