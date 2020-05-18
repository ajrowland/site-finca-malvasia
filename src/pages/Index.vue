<template>
  <Layout>

    <Banner />
    <Reservation modifier="top" />
    <About />
    <Property />
    <Reservation modifier="bottom" />
    <Reviews />
    <Experiences />
    <MoreInfo />

  </Layout>
</template>

<script>
import About from '../components/About'
import Banner from '../components/Banner'
import Experiences from '../components/Experiences'
import MoreInfo from '../components/MoreInfo'
import Property from '../components/Property'
import Reservation from '../components/Reservation'
import Reviews from '../components/Reviews'

export default {
  components: {
    About,
    Banner,
    Experiences,
    MoreInfo,
    Property,
    Reservation,
    Reviews
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style>

</style>
