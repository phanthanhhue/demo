<template>
  <div class="the-layout">
    <div class="left-layout">
    <TheNavbar />
    </div>
    <div class="right-layout">
      <PageHolder />
      <TheFooter />
    </div>
  </div>
</template>

<script>
import TheNavbar from '@/components/elements/TheNavbar'
import PageHolder from '@/components/generals/PageHolder'
import TheFooter from '@/components/elements/TheFooter'

export default {
  name: 'TheLayout',
  components: {
    TheNavbar,
    PageHolder,
    TheFooter
  }
}
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
}
.left-layout {
  border-right: 1px solid rgb(231, 231, 231);
  width: 14%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display:inline-block;
}
.right-layout {
  width: 86%;
  display: block;
  float: right;
  top: 0;
  left: 0;
}
</style>
