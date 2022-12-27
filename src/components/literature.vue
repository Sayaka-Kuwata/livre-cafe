<template>
  <div class="guide-inner">
    <FloorGuideDetail :text="text" :title="title" :url="url" />
    <div class="detail-text">
      <p>
        純文学、エンターテイメント、ミステリーなど幅広いジャンルの小説をご用意しております。<br />最新刊はもちろん、海外の小説も取り揃えておりますのでお気軽に手にとってご覧ください。少数ではありますが洋書もございます。中央にテーブルがありますので、座りながらじっくり文学の世界をお楽しみください。
      </p>
    </div>
  </div>
</template>

<script>
import FloorGuideDetail from "@/molecules/floor-guide-detail";
import ImageLiterature from "@/assets/images/figure/floor-literature.png";

export default {
  name: "Literature",
  components: {
    FloorGuideDetail,
    ImageLiterature,
  },
  data() {
    return {
      text: "1F",
      url: ImageLiterature,
      title: "文学",
    };
  },
};
</script>

<style lang="scss">
@use "/src/assets/scss/global" as global;
@use "/src/assets/scss/foundation/variable" as var;

.detail-text {
  p {
    @include global.font-20-normal(var.$color-black);
    line-height: 1.4;
    max-width: 640px;
    margin: 0 auto;
  }
}
</style>
