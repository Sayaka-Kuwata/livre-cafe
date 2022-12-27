<template>
  <ul class="news-card c-flex">
    <li class="column--3" v-for="card in cards" :key="cards.id">
      <img :src="card.image" alt="" />
      <p>
        <time>{{ card.time }}</time>
      </p>
      <p>{{ card.text }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NewsCard",
  props: ["cards"],
};
</script>

<style lang="scss">
@use "/src/assets/scss/global" as global;
@use "/src/assets/scss/foundation/variable" as var;

ul {
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px 20px;
}

.column--3 {
  width: 30%;
}

.news-card {
  img {
    margin-bottom: 16px;
    border: 1px solid var.$color-gray;
    border-top: 4px solid var.$color-primary;
  }
  time {
    display: block;
    @include global.font-18-bold;
    letter-spacing: 0.03rem;
    margin-bottom: 4px;
  }
  p {
    @include global.font-16-normal(var.$color-black);
    letter-spacing: 0.05rem;
    line-height: 1.3;
    text-align: justify;
    text-justify: inter-ideograph;
    white-space: pre-wrap;
  }
}

@include global.media-query("tb") {
  .column--3 {
    width: 46%;
  }

  .news-card {
    time {
      font-size: 16px;
    }
    p {
      font-size: 14px;
    }
  }
}

@include global.media-query("sp") {
  .news-card {
    flex-direction: column;
    p {
      letter-spacing: 0.03rem;
      line-height: 1.5;
    }
  }

  ul {
    gap: 24px;
  }

  .column--3 {
    width: 100%;
  }
}
</style>
