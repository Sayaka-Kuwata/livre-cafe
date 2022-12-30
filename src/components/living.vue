<template>
  <div class="guide-inner">
    <FloorGuideDetail :title="title" :url="url" />
    <div class="detail-text">
      <p>
        インテリア、デッサン、画集など、一般的な書店ではなかなか手に入らない書籍を多数ご用意しております。二階にも僅かですがテーブルなどフリースペースがあります。
      </p>
    </div>
  </div>
</template>

<script>
import FloorGuideDetail from "@/molecules/floor-guide-detail";
import ImageLiving from "@/assets/images/figure/floor-living.png";

export default {
  name: "Living",
  components: {
    FloorGuideDetail,
    ImageLiving,
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
</style>
