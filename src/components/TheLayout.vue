<template>
  <div class="the-layout">
    <div class="navbar-desktop-layout">
      <TheNavbar />
    </div>
    <div class="navbar-mobile-layout">
      <TheNavbarMobile v-on:showSideBar="showSideBar" />
    </div>
    <div class="sidebar-mobile-layout">
      <transition name="slide-fade">
        <TheSidebarMobile v-if="isShowSideBar" />
      </transition>
    </div>
    <div class="content-layout">
      <PageHolder />
      <TheFooter />
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
import TheNavbar from "@/components/elements/TheNavbar";
import TheNavbarMobile from "@/components/elements/TheNavbarMobile";
import TheSidebarMobile from "@/components/elements/TheSidebarMobile";
import PageHolder from "@/components/generals/PageHolder";
import TheFooter from "@/components/elements/TheFooter";

export default {
  name: "TheLayout",
  data() {
    return {
      isShowSideBar: false
    };
  },
  components: {
    TheNavbar,
    TheNavbarMobile,
    TheSidebarMobile,
    PageHolder,
    TheFooter
  },
  methods: {
    showSideBar: function() {
      this.isShowSideBar = !this.isShowSideBar;
    }
  }
};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
}
.navbar-desktop-layout {
  border-right: 1px solid rgb(231, 231, 231);
  width: 270px;
  position: fixed;
  top: 0;
  left: 0;
}
.content-layout {
  width: 100%;
  display: block;
  float: right;
}
/* Extra large devices (large laptops and desktops, 1000px and up) */
@media only screen and (min-width: 1000px) {
  .content-layout {
    width: calc(100% - 270px);
  }
  .navbar-mobile-layout,
  .sidebar-mobile-layout {
    display: none;
  }
}
@media only screen and (max-width: 1000px) {
  .navbar-desktop-layout {
    display: none;
  }
  .navbar-mobile-layout {
    width: 100%;
    position: fixed;
    top: 0;
  }
  .sidebar-mobile-layout {
    width: 250px;
    position: fixed;
    right: 0;
    margin-top: 47px;
  }
}
.clear {
  clear: both;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
