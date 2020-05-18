<template>
  <section class="c-property">
    <div class="container">
      <div class="grid grid--flush">
        <div class="1/2--lap-and-up grid__cell">
          <PropertyItem />
        </div>
        <div class="1/2--lap-and-up grid__cell">
          <PropertyItem />
        </div>
        <div class="1/2--lap-and-up grid__cell">
          <PropertyItem />
        </div>
        <div class="1/2--lap-and-up grid__cell">
          <PropertyItem />
        </div>
        <div class="1/2--lap-and-up grid__cell">
          <PropertyItem />
        </div>
        <div class="1/2--lap-and-up grid__cell">
          <PropertyItem />
        </div>
      </div>
    </div>
    <div class="c-property__modal" data-gallery-modal>
      <div class="c-property__modal-inner">
        <button class="c-property__modal-close" data-gallery-close>Close</button>
        <form method="post" action="">
          <h2 data-gallery-heading></h2>
          <select data-gallery-selector></select>
          <button class="e-button">Make a booking</button>
        </form>
        <div class="c-property__modal-container" data-gallery-container></div>
      </div>
    </div>
  </section>
</template>

<script>
import PropertyItem from '../components/PropertyItem'

export default {
  components: {
    PropertyItem
  }
}
</script>