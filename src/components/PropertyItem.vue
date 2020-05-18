<template>
  <div>
    <div class="c-property__item" @click="slideItem" ref="container">
      <div class="c-property__item-gallery" :style="{
        width: this.images.length * 100 + '%',
        transform: 'translateX(' + currentOffset + 'px)'
      }">
        <img v-for="(imageSrc, i) in images" :src="imageSrc" :key="i" ref="image" />
      </div>
      <div class="c-property__item-spec">3 bedroom Private Villa &amp; Pool - Sleeps up to 7 guests</div>
      <h2 data-slider-heading>La Finca</h2>
    </div>
    <div class="c-property__item-info">
      <a href="#" title="La Finca Overview">La Finca Overview</a>
      <a href="#" title="View full descriptions &amp; image gallery">View full descriptions &amp; image gallery</a>
      <a href="#" title="Book now">Book now &gt;&gt;&gt;</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      containerWidth: 0,
      currentItem: 0,
      currentOffset: 0,
      images: [
        'http://www.fincamalvasia.com/images/home-gallery/1.jpg',
        'http://www.fincamalvasia.com/images/home-gallery/2.jpg',
        'http://www.fincamalvasia.com/images/home-gallery/3.jpg',
        'http://www.fincamalvasia.com/images/home-gallery/4.jpg',
        'http://www.fincamalvasia.com/images/home-gallery/5.jpg',
        'http://www.fincamalvasia.com/images/home-gallery/6.jpg'
      ]
    }
  },
  methods: {
    slideItem(ev) {
      this.currentItem += (ev.clientX - ev.target.getBoundingClientRect().left) > this.$refs.container.offsetWidth / 2 ? 1 : -1;

      if (this.currentItem < 0) {
        this.currentItem = this.images.length - 1
      } else if (this.currentItem > this.images.length - 1) {
        this.currentItem = 0
      }

      this.currentOffset = -this.$refs.image[this.currentItem].offsetLeft
    }
  },
  mounted() {
    this.containerWidth = this.$refs.container.offsetWidth
  }
}
</script>