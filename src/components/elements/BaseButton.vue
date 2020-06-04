<template>
  <div class="base-button">
    <button class="btn">
      <slot>{{title}}</slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    title: {
      type: String,
      default: '',
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.base-button {
  .btn {
    color: white;
    background-color: rgb(41, 153, 153);
    border: none;
    border-radius: 3px;
    padding: 20px 30px;
    font-size: 20px;
    font-weight: 800;
    margin-top: 30px;
    &:hover {
      background-color: rgb(36, 102, 102);
      cursor: pointer;
    }
  }
}

</style>
