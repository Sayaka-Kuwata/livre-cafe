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
import ImageArt from "@/assets/images/figure/floor-art.png";

export default {
  name: "Art",
  components: {
    FloorGuideDetail,
    ImageArt,
  },
  data() {
    return {
      url: ImageArt,
      title: "アート・建築・デザイン",
    };
  },
};
</script>
