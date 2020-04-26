<template>
  <div class="the-navbar-mobile">
    <div class="brand">
      <span class="logo">
        <img
          src="https://secureservercdn.net/198.71.233.68/3xf.d8b.myftpupload.com/wp-content/uploads/2020/03/logo_qtgroup_003.png?time=1586443498"
          alt=""
        />
      </span>
    </div>
    <div class="nav-bar-mobile">
      <font-awesome-icon :icon="['fa', 'bars']" @click="showSideBar" />
    </div>
  </div>
</template>

<script>
export default {
  name: "TheNavbarMobile",
  methods: {
    showSideBar: function() {
      this.$emit("showSideBar");
    }
  }
};
</script>

<style lang="scss" scoped>
.the-navbar-mobile {
  width: 100%;
  height: 48px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  background: #fff;
  .brand {
    width: 95%;
    float: left;
    .logo {
      margin-left: 20px;
      margin-top: 20px;
      img {
        width: 90px;
      }
    }
  }
  .nav-bar-mobile {
    float: right;
    width: 5%;
    margin-top: 5px;
    font-size: 20px;
  }
}
</style>
