<template>
  <div>
    <Header />
    <MainVisual />
    <Concept />
    <News />
    <FloorGuide />
    <Biginner />
    <Drink />
    <Access />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from "@/organisms/header";
import MainVisual from "@/organisms/mainvisual";
import Concept from "@/organisms/concept";
import News from "@/organisms/news";
import FloorGuide from "@/organisms/floor-guide";
import Biginner from "@/organisms/biginner";
import Drink from "@/organisms/drink";
import Access from "@/organisms/access";
import Contact from "@/organisms/contact";
import Footer from "@/organisms/footer";

export default {
  name: "IndexPage",
  components: {
    Header,
    MainVisual,
    Concept,
    News,
    FloorGuide,
    Biginner,
    Drink,
    Access,
    Contact,
    Footer,
  },
};
</script>
