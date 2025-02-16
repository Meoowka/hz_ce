<template>
  <div
      v-for="(cards, index) in visibleCards"
      :key="index"
      class="product-card">
    <img
        :src="cards.image"
        :alt="cards.name"
        class="card-image" />

    <div class="card-content">
      <div class="category">Fashion</div>
      <div class="title">One of Saturn’s largest rings may be newer than anyone</div>
      <div class="meta">June 6, 2019 <span class="by">By</span> Rickie Baroch</div>
    </div>
  </div>
</template>

<script>
let renderCount = 0;
export default {
  data() {
    return {
      card: [
        {name: "1", image: "src/assets/img/1_post.jpg"},
        {name: "2", image: "src/assets/img/2_post.png"},
        {name: "3", image: "src/assets/img/3_post.png"},
        {name: "4", image: "src/assets/img/4_post.png"},
        {name: "5", image: "src/assets/img/5_post.png"},
        {name: "6", image: "src/assets/img/6_post.png"},
        {name: "7", image: "src/assets/img/7_post.png"},
        {name: "8", image: "src/assets/img/8_post.png"},
        {name: "9", image: "src/assets/img/9_post.png"},
        {name: "10", image: "src/assets/img/10_post.png"}
      ],
      maxItems: 6
    }
  },

  computed: {
    visibleCards() {
      if (renderCount > 1) {
        return this.card.slice(6, 10); // Показываем с 7 по 10 карточки
      }
      return this.card.slice(0, this.maxItems);
    }
  },
  created() {
    renderCount++;
  }
}
</script>

<style scoped lang="scss">
.product-card {
  background: white;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
  }
}
.card-content {
  padding: 15px;
  text-align: center;

  .category {
    font-size: 12px;
    font-weight: bold;
    color: #d4a373;
    text-transform: uppercase;
    margin-bottom: 5px;
  }

  .title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .meta {
    font-size: 14px;
    opacity: 0.8;
  }


  .meta .by {
    color: gray;
  }
}
</style>