<template>
  <section class="c-banner" @click="changeImage" ref="container">
    <div class="c-banner__items" data-banner-items>
      <img v-for="(image, i) in images" :src="image.src" :key="i" :alt="image.caption" :class="{ 'is--active': currentItem === i }" ref="image" />
    </div>
    <ul class="c-banner__indicator">
      <li v-for="(image, i) in images" :key="i" :class="{ 'is--active': currentItem === i }" v-html="image.text" />
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      clickInterval: null,
      currentItem: 0,
      images: [
        {
          src: 'http://www.fincamalvasia.com/images/home-gallery/1.jpg',
          caption: 'Hotel image 1'
        },
        {
          src: 'http://www.fincamalvasia.com/images/home-gallery/2.jpg',
          caption: 'Hotel image 2'
        },
        {
          src: 'http://www.fincamalvasia.com/images/home-gallery/3.jpg',
          caption: 'Hotel image 3'
        },
        {
          src: 'http://www.fincamalvasia.com/images/home-gallery/4.jpg',
          caption: 'Hotel image 4'
        },
        {
          src: 'http://www.fincamalvasia.com/images/home-gallery/5.jpg',
          caption: 'Hotel image 5'
        },
        {
          src: 'http://www.fincamalvasia.com/images/home-gallery/6.jpg',
          caption: 'Hotel image 6'
        }
      ]
    }
  },
  mounted() {
    this.clickInterval = setInterval(() => {
      this.currentItem++

      if (this.currentItem > this.images.length -1) {
        this.currentItem = 0;
      }
    }, 5000)
  },
  methods: {
    changeImage(ev) {
      clearInterval(this.clickInterval)

      this.currentItem += (ev.clientX - ev.target.getBoundingClientRect().left) > this.$refs.container.offsetWidth / 2 ? 1 : -1

      if (this.currentItem < 0) {
        this.currentItem = this.images.length - 1;
      } else if (this.currentItem > this.images.length -1) {
        this.currentItem = 0;
      }
    }
  }
}
</script>