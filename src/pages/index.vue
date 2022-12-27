<template>
  <div>
    <Header />
    <MainVisual />
    <Concept />
    <News />
  </div>
</template>

<script>
import Header from "@/organisms/header";
import MainVisual from "@/organisms/mainvisual";
import Concept from "@/organisms/concept";
import News from "@/organisms/news";

export default {
  name: "IndexPage",
  components: {
    Header,
    MainVisual,
    Concept,
    News,
  },
};
</script>
