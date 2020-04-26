<template>
  <div class="the-footer">
    <div class="the-footer-content">
      <div class="content-widget">
        <span class="widget-img">
          <img src="https://secureservercdn.net/198.71.233.68/3xf.d8b.myftpupload.com/wp-content/uploads/2020/03/logo_qtgroup_004.png" alt="">
        </span>
        <p class="widget-copy-right">
          <span>Copyright © 2020&nbsp;<router-link tag="li" to="/">QT-Group.</router-link></span>
          <span>Canada.</span>
          <span>All rights reverved.</span>
        </p>
      </div>
      <div class="content-category">
        <h3>Categories</h3>
          <ul>
            <router-link tag="li" to="/">Adventure</router-link>
            <router-link tag="li" to="/">Food For Thought</router-link>
            <router-link tag="li" to="/">Office</router-link>
            <router-link tag="li" to="/">Uncategorized</router-link>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.the-footer {
  background-color: rgba(206, 201, 201, 0.267);
  .the-footer-content {
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    color: #b9b9bb;
    .content-widget {
      .widget-img {
        text-align: left;
      }
      .widget-copy-right {
        span {
          line-height: 30px;
          display: flex;
          li {
            list-style: none;
            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
    .content-category {
      text-align: center;
      ul {
        li {
          line-height: 40px;
          list-style: none;
          text-align: left;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
}

</style>
