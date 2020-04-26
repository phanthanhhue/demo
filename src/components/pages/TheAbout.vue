<template>
  <div class="the-about" id="theAbout">
    <CardContainer>
      <CardHolder>
        <div class="top-about">
          <h1>We Make Amazing Things Every Day</h1>
        </div>
      </CardHolder>
      <CardHolder>
        <div class="vision">
          <div class="vision-image">
            <div class="img-contain">
              <div class="img-top"></div>
              <div class="img-middle"></div>
              <div class="img-bottom"></div>
            </div>
          </div>
          <div class="vision-content">
            <span class="intro">Connecting brands and ideas</span>
            <span class="title">Vision</span>
            <p>
              “To be a respected solutions company focused on combining state-of-the-art of Machine Learning,
              AI algorithms and delivering world-class quality big data solutions.”
            </p>
          </div>
        </div>
      </CardHolder>
      <CardHolder>
        <div class="mission">
          <div class="mission-content">
            <span class="intro">Everyone Stays Happy</span>
            <span class="title">Mission</span>
            <p>
              “Simplifying delivery of complex big data with our innovative services and continuously optimizing
              our every product to improve customers’ experience.”
            </p>
          </div>
          <div class="mission-image">
            <div class="img-contain">
              <div class="img-top"></div>
              <div class="img-middle"></div>
              <div class="img-bottom"></div>
            </div>
          </div>
        </div>
      </CardHolder>
      <CardHolder>
        <div class="core-values">
          <span class="intro">We’re Quite Multi-Disciplined</span>
          <span class="title">Core Values</span>
          <div class="flipping">
            <div id="flipping_container">
              <div id="flipping_card" class="shadow">
                <div class="front face">
                  <div class="square-shape"></div>
                  <h3>Simplicity</h3>
                </div>
                <div class="back face center">
                  <p>Turning complex process into simple solution.</p>
                </div>
              </div>
            </div>
            <div id="flipping_container">
              <div id="flipping_card" class="shadow">
                <div class="front face">
                  <div class="square-shape"></div>
                  <h3>Integrity</h3>
                  <span>Honest</span>
                </div>
                <div class="back face center">
                  <p>
                    We’re honest and forthright in every dealings, our commitment is to always do the right
                    thing with our clients, partners, and members. Building trust through transparency lifts
                    us all higher than we could rise. We always act morally, treating everyone with honesty
                    and respect, and we follow through on commitments we make.
                  </p>
                </div>
              </div>
            </div>
            <div id="flipping_container">
              <div id="flipping_card" class="shadow">
                <div class="front face">
                  <div class="square-shape"></div>
                  <h3>Boldness</h3>
                </div>
                <div class="back face center">
                  <p>
                    Opportunity could be seen as another form of risk. Do amazing things means taking risks.
                    We move fast and we’re not afraid to make mistakes. Don’t avoid challenges that make you
                    think insurmountable. QT Group makes you feel empowered to make decisions, build confidence
                    and motivation to move forward.
                  </p>
                </div>
              </div>
            </div>
            <div id="flipping_container">
              <div id="flipping_card" class="shadow">
                <div class="front face">
                  <div class="square-shape"></div>
                  <h3>Inovation</h3>
                </div>
                <div class="back face center">
                  <p>
                    We create a workplace where you can be assured to try new things, which we can overcome
                    these limitations and learn from the things that do not always go according to plan.
                    We are building a culture of innovation and continuous improvement, constantly seeking
                    personal and professional growth.
                  </p>
                </div>
              </div>
            </div>
            <div id="flipping_container">
              <div id="flipping_card" class="shadow">
                <div class="front face">
                  <div class="square-shape"></div>
                  <h3>Teamwork</h3>
                </div>
                <div class="back face center">
                  <p>
                    All members in QT group work together with mutual respect, cooperation, and appreciation
                    for all of our points of view and different personality. Relationships deliver results
                    because we can’t do our jobs without each other.  We work openly, inclusive and
                    multi-functional because it allows us to build relationships, find out the potential
                    competencies, and bring the best results.
                  </p>
                </div>
              </div>
            </div>
            <div id="flipping_container">
              <div id="flipping_card" class="shadow">
                <div class="front face">
                  <div class="square-shape"></div>
                  <h3>Simplicity</h3>
                </div>
                <div class="back face center">
                  <p>Turning complex process into simple solution.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardHolder>
      <CardHolder>
        <!-- <div class="human-resources">
          <span class="intro">ONE SPIRIT, ONE TEAM, ONE WIN</span>
          <span class="title">Human Resources</span>
          <p>
            “To be a respected solutions company focused on combining state-of-the-art of Machine Learning,
            AI algorithms and delivering world-class quality big data solutions.”
          </p>
        </div> -->
      </CardHolder>
    </CardContainer>
  </div>
</template>

<script>
import CardContainer from '../generals/CardContainer'
import CardHolder from '../generals/CardHolder'
import CardGeneral from '../generals/CardGeneral'

export default {
  name: 'TheAbout',
  props: {

  },
  components: {
    CardContainer,
    CardHolder,
    CardGeneral
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.the-about {
  .intro {
    color: #999;
    font-size: 16px;
    display: block;
    text-transform: uppercase;
  }
  .title {
    display: block;
    color: #444;
    font-size: 50px;
    font-weight: 100;
  }
  .top-about {
    position: relative;
    background: transparent url('https://secureservercdn.net/198.71.233.68/3xf.d8b.myftpupload.com/wp-content/uploads/2020/03/about_header_001.jpg?time=1586443498') no-repeat;
    background-size: cover;
    background-position: center center;
    height: 80vh;
    text-align: center;
    h1 {
      font-size: 50px;
      font-weight: 50;
      color: white;
      padding: 30px;
      top: 50%;
      left: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
    }
  }
  .vision {
    height: 550px;
    display: flex;
    align-items: center;
    .vision-image {
      width: calc(50% + 270px);
      height: 550px;
      position: relative;
      .img-contain {
        .img-top {
          position: absolute;
          z-index: 3;
          bottom: 25%;
          left: 20%;
          background: transparent url('https://secureservercdn.net/198.71.233.68/3xf.d8b.myftpupload.com/wp-content/uploads/2020/03/qtq80-nsbUtH-300x199.jpeg') no-repeat;
          background-size: contain;
          background-position: center center;
          width: 300px;
          height: 180px;
        }
        .img-middle{
          position: absolute;
          bottom: 25%;
          right: 20%;
          z-index: 2;
          background: transparent url('https://secureservercdn.net/198.71.233.68/3xf.d8b.myftpupload.com/wp-content/uploads/2020/03/qtq80-4ivdYO-300x165.jpeg') no-repeat;
          background-size: contain;
          background-position: center center;
          width: 250px;
          height: 150px;
        }
        .img-bottom {
          position: absolute;
          top: 20%;
          right: 30%;
          z-index: 1;
          background: transparent url('https://secureservercdn.net/198.71.233.68/3xf.d8b.myftpupload.com/wp-content/uploads/2020/03/homepage_team_001-300x149.jpg') no-repeat;
          background-size: contain;
          background-position: center center;
          width: 300px;
          height: 180px;
        }
      }
    }
    .vision-content {
      width: 50%;
      padding: 0 60px;
      p {
        color: #676767
      }
    }
  }
  .mission {
    height: 550px;
    display: flex;
    align-items: center;
    .mission-content {
      text-align: right;
      width: 50%;
      padding: 0 60px;
      .intro {
        color: #999;
        font-size: 16px;
        display: block;
        text-transform: uppercase;
      }
      .title {
        display: block;
        color: #444;
        font-size: 50px;
        font-weight: 100;
      }
      p {
        color: #676767
      }
    }
    .mission-image {
      width: calc(50% + 270px);
      height: 550px;
      position: relative;
      .img-contain {
        .img-top {
          position: absolute;
          z-index: 3;
          bottom: 30%;
          right: 25%;
          background: transparent url('https://secureservercdn.net/198.71.233.68/3xf.d8b.myftpupload.com/wp-content/uploads/2020/03/qtq80-He0gBO-300x190.jpeg') no-repeat;
          background-size: contain;
          background-position: center center;
          width: 280px;
          height: 180px;
        }
        .img-middle{
          position: absolute;
          bottom: 25%;
          left: 20%;
          z-index: 2;
          background: transparent url('https://secureservercdn.net/198.71.233.68/3xf.d8b.myftpupload.com/wp-content/uploads/2020/03/qtq80-Cyb5m7-300x200.jpeg') no-repeat;
          background-size: contain;
          background-position: center center;
          width:300px;
          height: 180px;
        }
        .img-bottom {
          position: absolute;
          top: 20%;
          right: 30%;
          z-index: 1;
          background: transparent url('https://secureservercdn.net/198.71.233.68/3xf.d8b.myftpupload.com/wp-content/uploads/2020/03/qtq80-1VDbXJ-300x200.jpeg') no-repeat;
          background-size: contain;
          background-position: center center;
          width: 300px;
          height: 180px;
        }
      }
    }
  }
  .core-values {
    margin: auto;
    text-align: center;
    .intro {
      display: block;
      font-size: 16px;
      color: #999;
      text-transform: uppercase;
    }
    .title {
      font-weight: 100;
      color: #444;
      font-size: 50px;
    }
    .flipping {
      padding: 60px;
      height: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      #flipping_container {
        line-height: 40px;
        padding: 20px;
        position: relative;
        width: 400px;
        height: 600px;
        z-index: 1;
        perspective: 1000;
        &:hover #flipping_card {
          transform: rotateY(-180deg);
        }
        #flipping_card {
          background-color: rgb(10, 10, 10);
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: all 0.6s linear;
          color: white;
        }
        .face {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          .square-shape {
            height: 66px;
            width: 36px;
            background-color: transparent;
            border: solid 3px #1fb5ac;
          }
          h3 {
            margin-top: 20px;
          }
        }
        .face.back {
          display: flex;
          justify-content: center;
          align-items: center;
          transform: rotateY(-180deg);
          box-sizing: border-box;
          padding: 10px;
          color: white;
          text-align: center;
          background-color: rgb(43, 157, 206);
          p {
            margin: 50px;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
