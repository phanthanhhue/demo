<template>
  <div class="the-contact">
    <div class="contact-left">
      <h1>Contact</h1>
      <div class="canada-contact">
        <h2>CANADA</h2>
        <h3>Saskatchewan Office</h3>
        <span>Phone: +1 306 491 8799</span>
        <span>Email: info@qntdata.com</span>
        <h3>Bristish Columbia Office</h3>
        <span>Phone: +1 306 491 8799</span>
        <span>Email: info.canada@qntdata.com</span>
      </div>
      <div>
        <h2>US</h2>
        <h3>US Office</h3>
        <span>Phone: +1 858 258 3151</span>
        <span>Email: Info.us@qntdata.com</span>
      </div>
      <div class="vietnam-contact">
        <h2>VIETNAM</h2>
        <h3>HO CHI MINH OFFICE</h3>
        <span>Phone: +84 904 917 075</span>
        <span>Email: Info.vietnam@qntdata.com</span>
        <h3>DA NANG OFFICE</h3>
        <span>Phone: +84 904 917 075</span>
        <span>Email: Info.danang@qntdata.com</span>
      </div>
    </div>
    <div class="contact-right">
      <h2>Don't Be Shy.</h2>
      <form action="">
        <div class="form-control">
        <label for="name">Your Name</label>
        <input type="text" name="name" placeholder="Your name">>
        </div>
        <div class="form-control">
          <label for="name">Your Email <span>*</span></label>
          <input type="text" name="name" placeholder="Your email">>
        </div>
        <div class="form-control">
          <label for="name">Your Message <span>*</span></label>
          <textarea rows="15" type="text" name="name" placeholder="Your message here"></textarea>
        </div>
        <button>Send Message</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.the-contact {
  height: auto;
  display: flex;
  .contact-left {
    margin-top: 30px;
    width: 50%;
    line-height: 30px;
    div {
      margin-bottom: 29px;
    }
    h2, h3, span {
      margin-left: 80px;
    }
    h1 {
      text-align: center;
      font-weight: 100;
      font-size: 40px;
      margin-bottom: 20px;
    }
    h2 {
      font-weight: 100;
    }
    h3 {
      text-transform: uppercase;
      letter-spacing: 3px;
      font-weight: 100;
      margin-top: 10px;
    }
    span {
      display: flex;
      font-weight: 700;
    }
  }
  .contact-right {
    width: 50%;
    background-color: #2c3742;
    h2, .form-control, button {
      margin-left: 80px;
    }
    h2 {
      font-size: 40px;
      font-weight: 100;
      color: white;
      padding-top: 50px;
    }
    .form-control {
      margin-top: 30px;
      label, input {
        display: block;
      }
      label {
        color: rgb(187, 155, 154);
        margin-bottom: 10px;
        span {
          color: red;
        }
      }
      input, textarea {
        background-color: rgba(255, 255, 255, 0.04);
        border: none;
        width: 90%;
        padding: 10px 5px;
        color: white;
      }
      textarea {
        resize: none;
      }
    }
    button {
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
}

</style>
