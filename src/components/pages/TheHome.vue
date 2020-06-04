<template>
  <div id="home" class="the-home">
    <CardContainer>
      <CardHolder>
        <div class="home-page-header" id="home-page">
          <h1 class="header-title">QT-Group</h1>
          <p class="header-descripton">
            THE GLOBAL QT-GROUP NOW HAS 1 COMPANY WITH MANY OFFICES IN VIETNAM ,
            2 COMPANIES IN CANADA AND 1 COMPANY IN THE USA. THE GROUP'S
            PRINCIPAL ACTIVITIES ARE IN ARTIFICIAL INTELLIGENCE AND FINANCIAL
            INVESTMENT - APPLIED IN MANY FIELDS, IN PARTICULARLY HOSPITALITY
            MANAGEMENT AND FINANCE FOR THE PAST THREE YEARS. CURRENTLY, THE
            GROUP IS IN THE PREPARATION STAGE TO OPEN MORE COMPANIES IN NORTH
            AMERICA BECAUSE OF DIFFERENT LAWS IN EACH STATE, ESPECIALLY THE
            INTERESTS OF CORPORATE INVESTMENT. OUR GROUP IS ALSO EXPANDING AND
            ESTABLISHING COMPANIES IN MANY REGIONS OF THE WORLD: NORTHERN
            EUROPE, JAPAN, THE UNITED KINGDOM, AUSTRALIA, GERMANY AND SINGAPORE.
            EACH COMPANY OF QT-GROUP OUTSIDE VIETNAM IS CALLING THEIR REGIONAL
            CAPITAL AND OUTSOURCING ON QT-VIETNAM TO DEVELOP AND REFINE ITS CORE
            PRODUCTS TO SUIT EACH REGION. IN THE PAST THREE YEARS THE COMPANIES
            IN CANADA HAVE DONE SO. WITH STRONG WORLD-LEADING EXPERIENCE FROM
            OUR FOUNDERS ON ARTIFICIAL INTELLIGENT APPLICATIONS, FINANCIAL
            MANAGING OF 150 MILLION USD INVESTMENT IN VIETNAM (2009-2014) AND
            JOINING 40 BILLION USD INVESTMENT MANAGEMENT GROUP IN CANADA
            (2017-2018), EACH COMPANY OUTSIDE VIETNAM THIS YEAR IS EXPECTED TO
            CALL FOR INVESTMENT OF 100 MILLION USD.
          </p>
          <div class="mouse-scrolldown-layout">
            <div
              class="mouse-scrolldown"
              @click="scrollmousedown('lastest-works')"
            >
              <div class="scrolldown"></div>
            </div>
          </div>
          <div class="chatbot-layout">
            <!-- Load Facebook SDK for JavaScript -->
            <div id="fb-root"></div>
            <!-- Your customer chat code -->
            <div
              class="fb-customerchat"
              attribution="setup_tool"
              page_id="318422449030240"
              theme_color="#0084ff"
            ></div>
          </div>
        </div>
      </CardHolder>
      <CardHolder>
        <div id="lastest-works" class="lastest-works-layout">
          <CardTitle />
          <div class="latest-works-left">
            <CardGeneral />
          </div>
          <div class="latest-works-right">
            <div class="right-above">
              <CardGeneral />
            </div>
            <div class="right-below">
              <div class="left">
                <CardGeneral />
              </div>
              <div class="right">
                <CardGeneral />
              </div>
            </div>
          </div>
        </div>
      </CardHolder>
      <CardHolder>
        <div class="wraper-contain">
          <div class="our-leadership">
            <h3>Our Leadership</h3>
            <p>
              WHEN EACH TALENTED INDIVIDUAL GATHERS TOGETHER, IT MAKES A GREAT
              SUCCESS.
            </p>
            <BaseButton :title="titleBtnAboutUs" />
          </div>
          <div class="job-title">
            <div class="founder">
              <CardGeneral :title="'Henry Duong'" :jobTitle="'FOUNDER'" />
              <p class="p-founder">
                15+ years of success in management, data analytics and
                investment. Being (certified) member of several famous global
                professional communities: CFA, CAIA, PRMIA, GARP, SOA, and CAS.
                Being a well-known scholar researcher on wide range research
                areas: mathematics, computer science, finance, risk management,
                insurance and economics. Postdoctoral researcher at Japan
                Advanced Institute of Science and Technology on Machine
                Learning, PhD in Mathematics, MS in Computer Science, MA in
                Analysis, BA in Mathematics & Computer Science.
              </p>
            </div>
            <div class="co-founder">
              <CardGeneral :title="'Adelina Ho'" :jobTitle="'CO-FOUNDER'" />
              <p>
                Adelina Ho has 13+ year work as Head of Programming Curriculum
                Committee and Lecturer. Not only possessing expertise in
                optimization research with prestigious publications and
                reviewing activities on high-ranked journals, she also has many
                years experience in developing statistical models, interpreting
                and analyzing data for driving business solutions. Currently,
                she focuses on developing QT-Data Inc. She graduated with her
                Master of Science in Optimization and Bachelor of Science in
                Mathematics & Computer Science.
              </p>
            </div>
          </div>
        </div>
      </CardHolder>
      <CardHolder>
        <!-- <CardTitle :title="maximTitle" />
        <CardGeneral>
          <p>
            It was really fun getting to know the team during the project. They
            were all helpful in answering my questions and made me feel at ease.
            The design ended up being better than I could have envisioned!
          </p>
        </CardGeneral> -->
      </CardHolder>
    </CardContainer>
  </div>
</template>

<script>
import CardContainer from '@/components/generals/CardContainer'
import CardHolder from '@/components/generals/CardHolder'
import CardGeneral from '@/components/generals/CardGeneral'
import CardTitle from '@/components/elements/CardTitle'
import BaseButton from '@/components/elements/BaseButton'

export default {
  name: 'TheHome',
  components: {
    CardContainer,
    CardHolder,
    CardGeneral,
    CardTitle,
    BaseButton
  },
  data () {
    return {
      maximTitle: 'WHAT THEY’RE SAYING',
      titleBtnAboutUs: 'Learn About Us'
    }
  },
  methods: {
    scrollmousedown: function (id) {
      var element = document.getElementById(id)
      console.log(element)
      var top = element.offsetTop
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
.the-home {
  .card-holder {
    display: flex;
  }
  .home-page-header {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
    padding: 0 120px;
    background: url("https://secureservercdn.net/198.71.233.68/3xf.d8b.myftpupload.com/wp-content/uploads/2020/03/homepage_header_003.jpg?time=1586443498")
      no-repeat;
    background-size: cover;
    color: #fff;
    .header-title {
      font-family: Roboto;
      text-transform: capitalize;
      letter-spacing: 0px;
      font-size: 77px;
      font-weight: 100;
      padding-bottom: 10px;
      margin: 0;
    }
    .header-descripton {
      letter-spacing: 4px;
      line-height: 30px;
      text-transform: uppercase;
      font-size: 12px;
    }
    .mouse-scrolldown-layout {
      position: absolute;
      bottom: 40px;
      .mouse-scrolldown {
        position: relative;
        width: 25px;
        height: 40px;
        border: 2px solid rgb(158, 158, 158);
        border-radius: 12.5px;
        animation: mouse 2s infinite;
        .scrolldown {
          position: absolute;
          top: 5px;
          width: 5px;
          height: 10px;
          background-color: rgb(158, 158, 158);
          left: calc(50% - 3px);
          border-radius: 2px;
          animation: scrolldown 2s infinite;
        }
        &:hover {
          border: 2px solid rgb(255, 255, 255);
        }
      }
    }
    .messenger-chatbot {
      position: absolute;
      bottom: 25px;
      right: 25px;
      border-radius: 30px;
      position: fixed;
      z-index: 1;
    }
  }
  .lastest-works-layout {
    display: flex;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    .latest-works-left {
      margin-right: 5px;
      height: 698px;
      width: 50%;
      background: url("https://secureservercdn.net/198.71.233.68/3xf.d8b.myftpupload.com/wp-content/uploads/2016/10/template_001-1000x877.jpg")
        no-repeat;
      background-size: cover;
      background-position: center;
    }
    .latest-works-right {
      width: 50%;
      margin-left: 5px;
      .right-above {
        margin-bottom: 5px;
        height: 50%;
        width: 100%;
        background: url("https://secureservercdn.net/198.71.233.68/3xf.d8b.myftpupload.com/wp-content/uploads/2016/10/template_002-1000x500.jpg")
          no-repeat;
        background-size: cover;
        background-position: center;
      }
      .right-below {
        display: flex;
        width: 100%;
        height: 50%;
        .left {
          margin-top: 5px;
          margin-bottom: 5px;
          margin-right: 5px;
          width: 50%;
          background: url("https://secureservercdn.net/198.71.233.68/3xf.d8b.myftpupload.com/wp-content/uploads/2016/10/template_005-500x500.jpg")
            no-repeat;
          background-size: cover;
          background-position: center;
        }
        .right {
          margin-top: 5px;
          margin-bottom: 5px;
          margin-left: 5px;
          width: 50%;
          background: url("https://secureservercdn.net/198.71.233.68/3xf.d8b.myftpupload.com/wp-content/uploads/2016/10/template_006-500x500.jpg")
            no-repeat;
          background-size: cover;
          background-position: center;
        }
      }
    }
  }
  .wraper-contain {
    display: flex;
    .our-leadership {
      background-color: black;
      color: white;
      width: 100%;
      padding: 60px;
      h3 {
        letter-spacing: 2px;
        font-weight: 300;
      }
      p {
        letter-spacing: 6px;
        font-weight: 300;
        line-height: 30px;
      }
    }
    .job-title {
      background-color: black;
      color: white;
      display: inline-block;
      padding: 30px;
      line-height: 40px;
      letter-spacing: 1px;
      .card-general {
        :nth-child(2) {
          font-weight: 800;
          font-size: 30px;
        }
        :nth-child(3) {
          font-size: 14px;
        }
      }
    }
  }
}
@media only screen and (max-width: 1024px) {
  .the-home {
    .home-page-header {
      .header-title {
        font-size: 53.9px;
      }
      .header-descripton {
        font-size: 10px;
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .the-home {
    .home-page-header {
      .header-title {
        font-size: 53.9px;
      }
      .header-descripton {
        font-size: 7px;
        letter-spacing: 1px;
      }
    }
    .lastest-works-layout {
      height: 1526px;
      flex-wrap: wrap;
      .latest-works-left {
        width: 100%;
        margin-right: 0;
      }
      .latest-works-right {
        width: 100%;
        margin-left: 0;
        height: 810px;
      }
      .right-below {
        .left {
          margin-bottom: 0;
        }
        .right {
          margin-bottom: 0;
        }
      }
    }
  }
}
@media only screen and (min-width: 375px) and (max-width: 767px) {
  .the-home {
    .home-page-header {
      padding: 0 20px;
      .header-title {
        font-size: 53.9px;
      }
      .header-descripton {
        font-size: 6px;
        letter-spacing: 1px;
        line-height: 20px;
      }
    }
    .lastest-works-layout {
      height: 1144px;
      flex-wrap: wrap;
      .latest-works-left {
        width: 100%;
        margin-right: 0;
        height: 300px;
      }
      .latest-works-right {
        width: 100%;
        height: 1205px;
        .right-above {
          height: 20%;
        }
        .right-below {
          height: 50%;
          flex-wrap: wrap;
          .left {
            margin-right: 0;
            width: 100%;
          }
          .right {
            width: 100%;
            margin-left: 0;
          }
        }
      }
    }
    .wraper-contain {
      flex-direction: column;
      flex-wrap: wrap;
      .our-leadership {
        background-color: black;
        color: white;
        width: 100%;
        padding: 33px;
        h3 {
          letter-spacing: 2px;
          font-weight: 300;
          font-size: 34.5px;
        }
        p {
          letter-spacing: 3px;
          font-weight: 300;
          line-height: 25px;
        }
      }
      .job-title {
        background-color: black;
        color: white;
        display: inline-block;
        padding: 30px;
        line-height: 35px;
        letter-spacing: 1px;
        font-size: 10px;
        padding-right: 80px;
        .card-general {
          :nth-child(2) {
            font-weight: 800;
            font-size: 25px;
          }
          :nth-child(3) {
            font-size: 14px;
          }
        }
      }
    }
  }
}
@keyframes scrolldown {
  0% {
    opacity: 1;
    top: 10px;
  }
  50% {
    opacity: 0;
    top: 25px;
  }
  70% {
    opacity: 0;
    top: 10px;
  }
  100% {
    opacity: 1;
    top: 10px;
  }
}
@keyframes mouse {
  0% {
    opacity: 1;
    top: 10px;
  }
  50% {
    opacity: 1;
    top: 25px;
  }
  70% {
    opacity: 1;
    top: 10px;
  }
  100% {
    opacity: 1;
    top: 10px;
  }
}
</style>
