<template>
  <div class="layout">
    <header class="c-header" data-site-header>
      <div class="container">
        <div class="grid">
          <div class="grid__cell">
            <nav class="c-header__navigation">
              <a href="/" title="Home" class="c-header__title">
                <h1>Finca Malvasia</h1>
                <h2>Volcanic vineyard accommodation</h2>
              </a>
              <button class="c-header__toggle" @click="openNav()">
                <div class="c-header__toggle-box">
                  <div class="c-header__toggle-inner"></div>
                </div>
              </button>
              <ul class="c-header__navigation-links">
                <li><a href="#" title="Reservations">Reservations</a></li>
                <li><a href="#" title="Gallery" data-gallery-init>Gallery</a></li>
                <li><a href="#" title="Accommodation">Accommodation</a></li>
                <li><a href="#" title="Wellness">Wellness</a></li>
                <li><a href="#" title="vineyard &amp; wines">vineyard &amp; wines</a></li>
                <li><a href="#experiences" title="Experiences">Experiences</a></li>
                <li><a href="#" title="About us">About us</a></li>
              </ul>
            </nav>
            <ul class="c-header__language-links">
              <li><a href="#" title="English">English</a></li>
              <li><a href="#" title="Español">Español</a></li>
              <li><a href="#" title="Dutch">Dutch</a></li>
              <li><a href="#" title="Aleman">Aleman</a></li>
              <li><a href="#" title="Fancais">Francais</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <main>
      <slot/>
    </main>

    <footer class="c-footer">
      <div class="c-footer__site-map">
        <div class="container">
          <div class="grid">
            <div class="grid__cell">
              <h2>Site map</h2>
            </div>
            <div class="1/2 1/6--lap-and-up grid__cell">
              <h3>Reservations</h3>
              <ul class="c-footer__section-list">
                <li><a href="#" title="">Book a room</a></li>
              </ul>
            </div>
            <div class="1/2 1/6--lap-and-up grid__cell">
              <h3>Gallery</h3>
              <ul class="c-footer__section-list">
                <li><a href="#" title="">Lanzarote</a></li>
                <li><a href="#" title="">The grounds</a></li>
                <li><a href="#" title="">La Finca</a></li>
                <li><a href="#" title="">Link</a></li>
                <li><a href="#" title="">Link</a></li>
                <li><a href="#" title="">Link</a></li>
                <li><a href="#" title="">Link</a></li>
                <li><a href="#" title="">Link</a></li>
              </ul>
            </div>
            <div class="1/2 1/6--lap-and-up grid__cell">
              <h3>Accommodation</h3>
              <ul class="c-footer__section-list">
                <li><a href="#" title="">Link</a></li>
                <li><a href="#" title="">Link</a></li>
                <li><a href="#" title="">Link</a></li>
                <li><a href="#" title="">Link</a></li>
                <li><a href="#" title="">Link</a></li>
                <li><a href="#" title="">Link</a></li>
              </ul>
            </div>
            <div class="1/2 1/6--lap-and-up grid__cell">
              <h3>Wellness</h3>
              <ul class="c-footer__section-list">
                <li><a href="#" title="">Link</a></li>
                <li><a href="#" title="">Link</a></li>
                <li><a href="#" title="">Link</a></li>
                <li><a href="#" title="">Link</a></li>
              </ul>
            </div>
            <div class="1/2 1/6--lap-and-up grid__cell">
              <h3>Vineyard &amp; wines</h3>
              <ul class="c-footer__section-list">
                <li><a href="#" title="">Link</a></li>
                <li><a href="#" title="">Link</a></li>
                <li><a href="#" title="">Link</a></li>
              </ul>
            </div>
            <div class="1/2 1/6--lap-and-up grid__cell">
              <h3>About us</h3>
              <ul class="c-footer__section-list">
                <li><a href="#" title="">Link</a></li>
                <li><a href="#" title="">Link</a></li>
                <li><a href="#" title="">Link</a></li>
                <li><a href="#" title="">Link</a></li>
                <li><a href="#" title="">Link</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="c-footer__contact-details">
        <div class="container container--spaced">
          <div class="grid">
            <div class="grid__cell">
              <ul>
                <li>Email: <a href="mailto://info@@fincamalvasia.com" title="Email us">info@@fincamalvasia.com</a></li>
                <li>Tel: <a href="tel://0034 665 468 538" title="Call us">0034 665 468 538</a></li>
              </ul>
              <ul>
                <li>&copy; Copyright 2019 Finca Malvasia.</li>
                <li><a href="#" title="Privacy policy">Privacy policy</a></li>
                <li>Photography: James Mitchell Photography</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    openNav() {
      document.body.classList.toggle('is--nav-active')
    }
  }
}
</script>