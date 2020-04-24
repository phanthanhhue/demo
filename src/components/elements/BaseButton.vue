<template>
  <div class="base-button">
    <button>
      <slot :title="title" :hwSize="hwSize"/>
    </button>
  </div>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    title: {
      type: String,
      default: 'Base Button',
      required: false
    },
    hwSize: {
      type: Array,
      default: () => [10, 10],
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
