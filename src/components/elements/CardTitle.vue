<template>
  <div class="card-title">
    {{intro}}
    {{title}}
    {{jobTitle}}
  </div>
</template>

<script>
export default {
  name: 'CardTitle',
  props: {
    intro: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    jobTitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
