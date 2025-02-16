<template>
  <div class="hero-conteiner">
    <div class="hero-post">
      <cards/>
      <big_cards class="big_cards"/>
      <cards/>

      <div class="hero-slide">

      </div>


    </div>


    <div class="hero-sidebar">

    </div>
  </div>
</template>

<script setup>
import cards from "../components/card.vue";
import big_cards from "../components/big-card.vue";
</script>

<style lang="scss">
@import "../assets/style/hero-conteiner.scss";
</style>