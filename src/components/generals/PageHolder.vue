<template>
  <div class="page-holder">
    <router-view />
    <section id="coronavirus-update" class="section-coronavirus-updates">
      <h1>Coronavirus Update</h1>
      <CoronavirusUpdate />
    </section>
    <section id="about" class="section-about">
      <h1>The About</h1>
      <About />
    </section>
    <section id="contact" class="sectioin-contact">
      <h1>The Contact</h1>
      <Contact />
    </section>
  </div>
</template>

<script>
import CoronavirusUpdate from '@/components/pages/CoronavirusUpdate'
import About from '@/components/pages/TheAbout'
import Contact from '@/components/pages/TheContact'

export default {
  name: 'PageHolder',
  components: {
    CoronavirusUpdate,
    About,
    Contact
  }
}
</script>

<style lang="scss" scoped>
.page-holder {
  section {
    h1 {
      text-align: center;
      text-transform: uppercase;
      padding: 40px 0;
    }
  }
}
</style>
