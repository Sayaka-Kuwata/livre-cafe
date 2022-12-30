<template>
  <div>
    <Header />
    <MainVisual />
    <Concept />
    <News />
    <FloorGuide />
  </div>
</template>

<script>
import Header from "@/organisms/header";
import MainVisual from "@/organisms/mainvisual";
import Concept from "@/organisms/concept";
import News from "@/organisms/news";
import FloorGuide from "@/organisms/floor-guide";

export default {
  name: "IndexPage",
  components: {
    Header,
    MainVisual,
    Concept,
    News,
    FloorGuide,
  },
};
</script>
