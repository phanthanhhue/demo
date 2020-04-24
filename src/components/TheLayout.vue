<template>
  <div class="the-layout">
    <TheNavbar />
    <PageHolder />
    <TheFooter />
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
</style>
