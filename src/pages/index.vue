<template>
  <div>
    <Header />
    <MainVisual />
    <Concept />
  </div>
</template>

<script>
import Header from "@/organisms/header";
import MainVisual from "@/organisms/mainvisual";
import Concept from "@/organisms/concept";

export default {
  name: "IndexPage",
  components: {
    Header,
    MainVisual,
    Concept,
  },
};
</script>
