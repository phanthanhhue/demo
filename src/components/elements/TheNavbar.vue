<template>
  <div class="the-navbar">
    <div class="brand">
      <span class="logo">
        <img src="https://secureservercdn.net/198.71.233.68/3xf.d8b.myftpupload.com/wp-content/uploads/2020/03/logo_qtgroup_003.png?time=1586443498" alt="">
      </span>
    </div>
    <div class="nav-bar">
      <ul>
        <router-link class="nav-item" tag="li" :to="{hash: 'theHome'}">Home</router-link>
        <router-link class="nav-item" tag="li" :to="{hash: 'coronavirusUpdate'}">Coronavirus Update</router-link>
        <router-link class="nav-item" tag="li" :to="{hash: 'theAbout'}">About</router-link>
        <router-link class="nav-item" tag="li" :to="{hash: 'theContact'}">Contact</router-link>
        <button class="nav-item" tag="li" @click="goto('home-page')">Home</button>
      </ul>
    </div>
    <div class="contact-icon">
      <ul>
        <a target="_blank" href="" class="twitter"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
        <a target="_blank" href="" class="facebook"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
        <a target="_blank" href="" class="youtube"><font-awesome-icon :icon="['fab', 'youtube']" /></a>
        <a target="_blank" href="" class="vimeo"><font-awesome-icon :icon="['fab', 'vimeo']" /></a>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheNavbar',
  methods:{
    goto(id) {
        var element = document.getElementById(id);
        console.log(element);
        var top = element.offsetTop;
        window.scroll({
          top: top,
          left: 0,
          behavior: 'smooth'
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.the-navbar {
  .brand {
    width: 100px;
    margin-top: 20px;
    .logo {
      margin-left: 20px;
    }
  }
  .nav-bar {
    height: calc(100vh - 160px);
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
      .nav-item {
        padding: 10px;
        border-radius: 5px;
        &:hover {
        cursor: pointer;
        color: #FFF;
        background-color: #1fb5ac;
        }
      }
      .router-link-exact-active {
        color: #FFF;
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
        color: #38A1F3;
        &:hover {
        cursor: pointer;
        color: rgb(9, 107, 236);;
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
        color: #ED3833;
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
        color: rgb(6, 65, 143);;
        background-color: none;
        }
      }
    }
  }
}
// @media screen and (max-height: 882px) {
//   .the-navbar {
//     .nav-bar {
//       height: 690px;
//     }
//   }
// }
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {}
</style>
