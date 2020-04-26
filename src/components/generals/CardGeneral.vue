<template>
  <div class="card-general" :img="img">
    <div class="intro">{{intro}}</div>
    <div class="title">{{title}}</div>
    <div class="job-title">{{jobTitle}}</div>
  </div>
</template>

<script>
export default {
  name: 'CardGeneral',
  props: {
    intro: {
      type: String,
      default: '',
      required: false
    },
    title: {
      type: String,
      default: '',
      required: false
    },
    jobTitle: {
      type: String,
      default: '',
      required: false
    },
    img: {
      type: String,
      default: '',
      required: false
    }
  },
  data () {
    return {
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
