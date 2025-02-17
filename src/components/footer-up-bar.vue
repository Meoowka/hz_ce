<template>
  <div class="footer-up-bar">
    <div class="title"><span>Follow our @instagram_name</span></div>
    <div class="img-holder">
    <div
        v-for="(cards, index) in card"
        :key="index"
        class="image"
    >
      <img
          :src="cards.image"
           :alt="cards.name"
           class="img"
      />
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      card: [
        {name: "1", image: "src/assets/img/Bitmap_1.png"},
        {name: "2", image: "src/assets/img/Bitmap_2.jpg"},
        {name: "3", image: "src/assets/img/Bitmap_3.png"},
        {name: "4", image: "src/assets/img/Bitmap_4.png"},
        {name: "5", image: "src/assets/img/Bitmap_5.png"},
        {name: "6", image: "src/assets/img/Bitmap_6.png"},
      ],
    }
  }
}
</script>

<style scoped lang="scss">
.footer-up-bar{
  margin-top: 100px;
  left: 20px;
  width: 100%;

  .title{
    font-family: PT Serif,sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 31.8px;
    letter-spacing: 0;
    text-align: center;
    padding-bottom: 20px;
  }
  .img-holder {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;

    .image {
      margin: 10px;
      .img{
        width: 296px;
        height: 296px;
        top: 71px;
        left: 1267px;

      }
    }
  }

}
</style>