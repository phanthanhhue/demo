<template>
  <div class="the-sidebar">
    <div class="side-bar">
      <ul>
        <router-link class="side-item" tag="li" to="/">Home</router-link>
        <router-link class="side-item" tag="li" to="/coronavirus-update"
          >Coronavirus Update</router-link
        >
        <router-link class="side-item" tag="li" to="/about">About</router-link>
        <router-link class="side-item" tag="li" to="/contact"
          >Contact</router-link
        >
      </ul>
    </div>
    <div class="contact-icon">
      <ul>
        <a target="_blank" href="" class="twitter"
          ><font-awesome-icon :icon="['fab', 'twitter']"
        /></a>
        <a target="_blank" href="" class="facebook"
          ><font-awesome-icon :icon="['fab', 'facebook']"
        /></a>
        <a target="_blank" href="" class="youtube"
          ><font-awesome-icon :icon="['fab', 'youtube']"
        /></a>
        <a target="_blank" href="" class="vimeo"
          ><font-awesome-icon :icon="['fab', 'vimeo']"
        /></a>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Thesidebar'
}
</script>

<style lang="scss" scoped>
.the-sidebar {
  width: 100%;
  height: calc(100vh + 47px);
  background: rgba(231, 231, 231, 0.938);
  .side-bar {
    height: calc(100vh - 140px);
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    ul {
      margin-left: -15px;
      li {
        margin-top: 10px;
        list-style: none;
        align-items: flex-start;
        font-weight: 800;
      }
      .side-item {
        padding: 10px;
        border-radius: 5px;
        &:hover {
          cursor: pointer;
          background-color: #1fb5ac;
        }
      }
      .router-link-exact-active {
        color: #fff;
        background-color: #16a085;
      }
    }
  }
  .contact-icon {
    height: 100px;
    ul {
      font-size: 16px;
      .twitter {
        margin-right: 20px;
        color: #38a1f3;
        &:hover {
          cursor: pointer;
          color: rgb(9, 107, 236);
          background-color: none;
        }
      }
      .facebook {
        margin-right: 20px;
        color: #4267b2;
        &:hover {
          cursor: pointer;
          color: rgb(7, 75, 163);
          background-color: none;
        }
      }
      .youtube {
        margin-right: 20px;
        color: #ed3833;
        &:hover {
          cursor: pointer;
          color: rgb(179, 41, 37);
          background-color: none;
        }
      }
      .vimeo {
        margin-right: 20px;
        color: #86c9ef;
        &:hover {
          cursor: pointer;
          color: rgb(6, 65, 143);
          background-color: none;
        }
      }
    }
  }
}
</style>
