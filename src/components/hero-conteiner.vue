<template>
  <div class="hero-conteiner">
    <div class="hero-post">
      <cards/>
      <big_cards class="big_cards"/>
      <cards/>
        <div class="pagination">
          <span><a href="#">< OLDER POST</a></span>
          <button @click="" :class="{ active: currentPage === 1 }">1</button>
          <button @click="" :class="{ active: currentPage === 2 }">2</button>
          <button @click="" :class="{ active: currentPage === 3 }">3</button>
          <button @click="" :class="{ active: currentPage === 4 }">...</button>
          <button @click="" :class="{ active: currentPage === 8 }">8</button>
          <span><a href="#">NEXT POST ></a></span>
        </div>
    </div>

    <div class="hero-sidebar">
      <card_slide_about/>
      <card_slide/>
    </div>
  </div>
</template>

<script setup>

import cards from "../components/card.vue";
import big_cards from "../components/big-card.vue";
import card_slide_about from "./card-slide-about.vue";
import card_slide from "./card-slider.vue";
</script>

<style lang="scss">
@import "../assets/style/hero-conteiner.scss";
</style>