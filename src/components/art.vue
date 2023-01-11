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
import ImageArt from "@/assets/images/figure/floor-art.png";
import FadeIncomponent from "@/atoms/fade-in";

export default {
  name: "Art",
  components: {
    FloorGuideDetail,
    ImageArt,
    FadeIncomponent,
  },
  data() {
    return {
      url: ImageArt,
      title: "アート・建築・デザイン",
    };
  },
};
</script>
