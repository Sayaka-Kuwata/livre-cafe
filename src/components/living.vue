<template>
  <div class="guide-inner">
    <FadeIncomponent>
      <FloorGuideDetail :title="title" :url="url" />
    </FadeIncomponent>
    <div class="detail-text">
      <FadeIncomponent>
        <p>
          インテリア、デッサン、画集など、一般的な書店ではなかなか手に入らない書籍を多数ご用意しております。二階にも僅かですがテーブルなどフリースペースがあります。
        </p>
      </FadeIncomponent>
    </div>
  </div>
</template>

<script>
import FloorGuideDetail from "@/molecules/floor-guide-detail";
import ImageLiving from "@/assets/images/figure/floor-living.png";
import FadeIncomponent from "@/atoms/fade-in";

export default {
  name: "Living",
  components: {
    FloorGuideDetail,
    ImageLiving,
    FadeIncomponent,
  },
  data() {
    return {
      url: ImageLiving,
      title: "暮らし・健康・料理",
    };
  },
};
</script>

<style lang="scss">
@use "/src/assets/scss/global" as global;
@use "/src/assets/scss/foundation/variable" as var;

.guide-inner {
  margin-bottom: 96px;
}

@include global.media-query("tb") {
  .guide-inner {
    margin: 56px 0 180px;
    &:last-of-type {
      margin: 56px 0 0;
    }
  }
}

@include global.media-query("sp") {
  .guide-inner {
    margin: 56px 0 96px;
  }
}
</style>
