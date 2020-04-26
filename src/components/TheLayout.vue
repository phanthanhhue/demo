<template>
  <div class="the-layout">
    <div class="navbar-desktop-layout">
      <TheNavbar />
    </div>
    <div class="navbar-mobile-layout">
      <TheNavbarMobile v-on:showSideBar="showSideBar"/>
    </div>
    <div class="content-layout">
      <TheSidebarMobile v-if="isShowSideBar"/>
      <PageHolder />
      <TheFooter />
    </div>
  </div>
</template>

<script>
import TheNavbar from '@/components/elements/TheNavbar'
import TheNavbarMobile from '@/components/elements/TheNavbarMobile'
import TheSidebarMobile from '@/components/elements/TheSidebarMobile'
import PageHolder from '@/components/generals/PageHolder'
import TheFooter from '@/components/elements/TheFooter'

export default {
  name: 'TheLayout',
  data () {
    return {
      isShowSideBar: false
    }
  },
  components: {
    TheNavbar,
    TheNavbarMobile,
    TheSidebarMobile,
    PageHolder,
    TheFooter
  },
  methods: {
    showSideBar: function () {
      this.isShowSideBar =! this.isShowSideBar
    }
  }
}
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
}
.navbar-desktop-layout { //Left sidebar for desktop
  border-right: 1px solid rgb(231, 231, 231);
  width: 270px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display:inline-block;
}
.content-layout {
  width: 100%;
  display: block;
  float: right;
  top: 0;
  left: 0;
}
/* Extra large devices (large laptops and desktops, 1000px and up) */
@media only screen and (min-width: 1000px) {
  .content-layout {
    width: calc(100% - 270px);
  }
  .navbar-mobile-layout {
    display:none;
  }
}
@media only screen and (max-width: 1000px) {
  .navbar-desktop-layout {
    display:none;
  }
  .navbar-mobile-layout {
    width:100%;
    position: fixed;
    top: 0;
    height: 48px;
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
  }
}
</style>
