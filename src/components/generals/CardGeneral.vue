<template>
  <div class="card-general" :img="img">
    <div>{{intro}}</div>
    <div>{{title}}</div>
    <div>{{jobTitle}}</div>
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
