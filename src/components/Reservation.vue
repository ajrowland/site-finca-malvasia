<template>
  <section class="c-reservation">
    <div class="container container--spaced">
      <div class="grid grid--middle">
        <div class="1/6--lap-and-up 2/12--desk grid__cell">
          <h2>Online reservation enquiry</h2>
        </div>
        <div class="1/2--lap-and-up 7/12--desk grid__cell">
          <form action="#" method="post" class="c-reservation__form">
            <div class="c-reservation__field-container">
              <label class="c-reservation__field c-reservation__field--arrival">
                <span><input type="date" name="date_arrive" /></span>
                Arrival Date
              </label>
              <label class="c-reservation__field c-reservation__field--departure">
                <span><input type="date" name="date_depart" /></span>
                Departure Date
              </label>
            </div>
            <div class="c-reservation__field-container">
              <label class="c-reservation__field c-reservation__field--adults">
                Adults
                <select name="num_adult">
                  <option></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </label>
              <label class="c-reservation__field c-reservation__field--children">
                Children
                <select name="num_child">
                    <option></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
              </label>
              <button class="e-button">Check Availability</button>
            </div>
          </form>
        </div>
        <div class="2/6--lap-and-up 3/12--desk grid__cell">
          <div class="c-reservation__contact">
            <a href="tel:0034 665 468 538" title="Telephone us">Telephone us: 0034&nbsp;665&nbsp;468&nbsp;538</a>
            <a href="email:into@fincamalvasia.com" title="Email us">Email us: info@fincamalvasia.com</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>