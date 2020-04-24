<template>
  <div class="the-navbar">
    <div class="brand">
      <span class="logo">
        <img src="https://secureservercdn.net/198.71.233.68/3xf.d8b.myftpupload.com/wp-content/uploads/2020/03/logo_qtgroup_003.png?time=1586443498" alt="">
      </span>
    </div>
    <div class="nav-bar">
      <ul class="nav">
        <router-link class="nav-item" tag="li" to="/">Home</router-link>
        <router-link class="nav-item" tag="li" to="/coronavirus-update">Coronavirus Update</router-link>
        <router-link class="nav-item" tag="li" to="/about">About</router-link>
        <router-link class="nav-item" tag="li" to="/contact">Contact</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheNavbar'
}
</script>

<style lang="scss" scoped>
.the-navbar {
  display: flex;
  justify-content: space-between;
  .brand {
    width: 200px;
    .logo {
      margin-left: 40px;
    }
  }
  .nav-bar {
    width: calc(1024-200) + px;
    .nav {
      display: flex;
      li {
        margin-right: 40px;
        list-style: none;
        align-items: flex-start;
        font-weight: 800;
        }
      .nav-item {
        padding: 10px;
        border-radius: 5px;
        &:hover {
        cursor: pointer;
        color: blanchedalmond;
        background-color: rgb(9, 107, 236);
        }
      }
      .router-link-exact-active {
        color: blanchedalmond;
        background-color: rgb(9, 107, 236);
      }
    }
  }
}
</style>
