<template>
  <header class="container">
    <span class="underline-logo">FASHION</span>
    <nav>
      <ul>
        <li><a href="#"></a>Home</li>
        <li><a href="#"></a>Recipes</li>
        <li><a href="#"></a>Article</li>
        <li><a href="#"></a>Contact</li>
        <li><a href="#"></a>Purshase</li>
      </ul>
    </nav>
  </header>
</template>


<script setup>

</script>

<style lang="scss" scoped>
.container {
  width: 1760px;
  margin: 0 auto;

}
  header {
    padding: 32px;

    nav {
      float: right;
      width: 368px;
    }

    nav ul {
      display: flex;
      justify-content: space-between;
    }
    nav ul li {
      display: inline-block;
      margin-top: 8px;
    }
    nav ul li:hover{
      color: rgba(201, 169, 110, 1);
    }
  }

.underline-logo {
  font-size: 25px;
  letter-spacing: 2.5px;
  color: rgba(23, 23, 23, 1);
  display: inline-block;
  position: relative;

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


</style>