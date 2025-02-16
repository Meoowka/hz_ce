<template>
  <div class="card-slide">
    <div class="card-auth">
      <span class="title-about">About the author</span>
      <div class="card">
          <img src="../assets/img/1_post.jpg" alt="Fashion">
          <div class="card-content">
            <div class="category">Kate Willems</div>
            <div class="meta"><span class="by">Food & cooking bloger</span></div>
            <div class="title">Hi, I'm Sonia. Cooking is the way I<br> express my creative side to the world.<br> Welcome to my Kitchen Corner on…</div>
          </div>
        <div class="meta-bottom"><span><a href="">CONTINUE READING</a></span></div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.card-auth {
  width: 270px;
  margin-top: 60px;
  margin-left: 60px;
  .card{
    background: white;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    img {
      width: 100%;
      height: 180px;
      object-fit: cover;
    }
  }
  .title-about{
    display: flex;
    width: 100%;
    height: 50px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 15px;
    justify-content: center;
    align-items: center;
    font-family: PT Serif, serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 21.2px;
    text-align: center;
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
      font-family: PT Sans, serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: 0px;
      text-align: center;


      margin-bottom: 8px;
    }

    .meta {
      font-size: 14px;
      opacity: 0.8;

      .by {
        color: gray;
      }
    }


  }
  .meta-bottom{
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.9);
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    a{
      font-family: PT Serif,serif;
      font-weight: 400;
      font-size: 12px;
      line-height: 15.9px;
      letter-spacing: 0px;
      color: rgba(201, 169, 110, 1);

    }
  }


}
</style>