<template>
  <div class="sidebar">
    <div class="section">
      <span class="title">Categories</span>
      <v-list>
        <v-list-item
            class="custom-list"
            v-for="(category, index) in categories"
            :key="index"
            >
            <v-list-item-title>{{ category.name }}</v-list-item-title>
            <v-list-item-subtitle class="custom-item">({{ category.count }})</v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </div>

    <div class="section">
      <span class="title">Social media</span>
      <div class="social-grid">
        <div v-for="(social, index) in socialMedia" :key="index" class="social-item">
          <v-icon>{{ social.icon }}</v-icon>
          <div class="social-info">
            <span class="count">{{ social.count }}</span>
            <span class="label">{{ social.label }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <span class="title">Tags</span>
      <div class="tags">
        <v-chip v-for="(tag, index) in tags" :key="index" class="tag">{{ tag }}</v-chip>
      </div>
    </div>
  </div>
</template>

<script setup>
const categories = [
  { name: 'Fashion', count: 23 },
  { name: 'Style & clothes', count: 7 },
  { name: 'Minimalism', count: 16 },
  { name: 'Black & White', count: 5 },
  { name: 'Modern clothes', count: 12 }
];

const socialMedia = [
  { icon: 'mdi-facebook', count: '32k', label: 'likes' },
  { icon: 'mdi-pinterest', count: '814', label: 'followers' },
  { icon: 'mdi-vimeo', count: '165', label: 'followers' },
  { icon: 'mdi-dribble', count: '6k', label: 'followers' },
  { icon: 'mdi-twitter', count: '130k', label: 'followers' },
  { icon: 'mdi-behance', count: '37k', label: 'followers' },
  { icon: 'mdi-instagram', count: '85.4k', label: 'followers' },
  { icon: 'mdi-youtube', count: '52k', label: 'subscribers' },
  { icon: 'mdi-google-plus', count: '642', label: 'followers' }
];

const tags = ['Business', 'Freelance', 'Money', 'Experience', 'Lifestyle', 'SEO', 'Wordpress', 'Marketing', 'UX', 'Modern', 'Success', 'Nature'];
</script>

<style scoped lang="scss">
.sidebar {
  width: 270px;
  margin-top: 60px;
  margin-left: 60px;


  .section {
    margin-bottom: 40px;

    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 10px;
    }
.custom-list{
  border-bottom: #9f9e9e solid 1px;

  .custom-item{
    float: right;
    margin-top: -20px;
    font-family: PT Serif, serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 18.55px;
    letter-spacing: 0px;


  }
}
  }

  .social-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    text-align: center;


    .social-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .social-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 5px;

        .count {
          font-size: 14px;
          font-weight: bold;
        }

        .label {
          font-size: 12px;
          color: gray;
        }
      }
    }
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    .tag {
      background: #f5f5f5;
      padding: 6px 12px;
      border-radius: 16px;
      font-size: 12px;
    }
  }
}
</style>
