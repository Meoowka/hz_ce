<script setup>

</script>

<template>
  <div class="product-card big-card">
    <img src="../assets/img/img_full.jpg" alt="Summer">
    <div class="card-content">
      <div class="category text-left">Summer</div>
      <div class="title text-left">One of Saturn’s largest rings may be newer than anyone</div>
      <div class="meta text-left">June 6, 2019 <span class="by">By</span> Rickie Baroch</div>
      <div class="meta-footer text-left">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,<br> totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque<br> laudantium, totam rem</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-card {
  background: white;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    img {
      height: 365px;
    }

  .text-left {
    text-align: left;
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
    .meta-footer{
      margin-top: 8px;
      font-family: "PT Sans",sans-serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;

    }

    .meta .by {
      color: gray;
    }
  }

}

</style>