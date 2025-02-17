<template>
  <footer>
  <div class="footer-inner">
    <div class="logo"><span class="underline-logo">FASHION</span></div>
    <div class="menu">
      <ul class="menu-list">
        <li><a href="">Home</a></li>
        <li><a href="">Recipes</a></li>
        <li><a href="">Article</a></li>
        <li><a href="">Contact</a></li>
        <li><a href="">Purchase</a></li>
      </ul>
    </div>
    <div class="icons-container">
      <div
          v-for="(social, index) in socialMedia"
          :key="index"
          class="icons-container-items"
      >
        <v-icon class="icon">{{ social.icon }}</v-icon>
      </div>
    </div>
    <div class="underline"></div>
    <div class="logo-dw"><span>@2019 Logwork. All Right Reserved.</span></div>

  </div>
  </footer>
</template>

<script setup>
const socialMedia = [
  { icon: 'mdi-facebook'},
  { icon: 'mdi-pinterest'},
  { icon: 'mdi-vimeo' },
  { icon: 'mdi-pinterest'},
  { icon: 'mdi-twitter'},
];
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: center;
  margin: 100px 375px 30px 375px;

  .underline{
    width: 100%;
    border-top: 1px solid rgba(23, 23, 23, 1);
  }
  .footer-inner{
      width: 1170px;

    .icons-container{
      display: flex;
      justify-content: space-between;
      width: 300px;
      margin: 29px auto;
      .icons-container-items {

        .icon {
          color: #9f9e9e;

          &:hover {
            border: #666666 2px solid;
            border-radius: 100%;
            color: rgba(201, 169, 110, 1);
          }
        }
      }

    }


.logo {
  display: flex;
  justify-content: center;
  .underline-logo {
    font-size: 25px;
    letter-spacing: 2.5px;
    color: rgba(23, 23, 23, 1);
    display: inline-block;
    position: relative;
    margin-bottom: 60px;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 3px;
      width: 100%;
      height: 6px;
      background-color: #c9a96e;
      opacity: 0.4;
      z-index: -1;
    }
  }
}

.logo-dw{
  display: flex;
  margin-top: 30px;
  justify-content: center;
  span{
    font-family: PT Sans,sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 18.12px;
    letter-spacing: 0;
  }

}
    .menu {
      width: 100%;


      ul {
          display: flex;
          margin: 0 40px;
          justify-content: space-between;
        li {

          display: inline-block;
          margin-top: 8px;
          a{

            font-family: PT Sans,sans-serif;
            font-size: 14px;
            line-height: 18.12px;
            letter-spacing: 0;
            color: #666666;
            text-decoration: none;
          }
        }
      }
    }

  }
}
</style>