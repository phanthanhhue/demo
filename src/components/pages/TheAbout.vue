<template>
  <div class="the-about">
    <CardContainer>
      <CardHolder>
        <CardGeneral :title="topTitle"/>
      </CardHolder>
      <CardHolder>
        <div class="vision-image">
          <CardGeneral />
        </div>
        <div class="vision-content">
          <CardGeneral :intro="'CONNECTING BRANDS AND IDEAS'" :title="'Vision'" :content="visionContent" :img="topStyles" />
        </div>
      </CardHolder>
      <CardHolder>
        <div class="mission-image">
          <CardGeneral />
        </div>
        <div class="mission-content">
          <CardGeneral :intro="'EVERYONE STAYS HAPPY'" :title="'Core Values'" :content="missionContent" />
        </div>
      </CardHolder>
      <CardHolder>
        <div class="core-values">
          <CardGeneral :intro="'WE’RE QUITE MULTI-DISCIPLINED'" :title="'Core Values'"/>
          <div>
            <!-- This is the slider -->
          </div>
        </div>
        <div class="human-resource">
          <CardGeneral :intro="'ONE SPIRIT, ONE TEAM, ONE WIN'" :title="'Human Resources'"/>
          <div>
            <!-- This is the slider -->
          </div>
        </div>
        <div class="customer-relations">
          <CardGeneral :intro="'WE BUILD LASTING RELATIONSHIPS'" :title="'Customer Relations'"/>
          <div>
            <!-- This is the slider -->
          </div>
        </div>
        <div class="customer-relations">
          <CardGeneral :title="'MEMBER BRANDS'"/>
          <div>
            <!-- This is the slider -->
          </div>
        </div>
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
      topTitle: 'We Make Amazing Things Every Day.',
      topStyles: {
        background: 'transparent url("https://secureservercdn.net/198.71.233.68/3xf.d8b.myftpupload.com/wp-content/uploads/2020/03/about_header_001.jpg?time=1586443498") no-repeat center',
        height: 370 + 'px',
        width: 768 + 'px'
      },
      visionStyles: {
        background: 'transparent url("https://secureservercdn.net/198.71.233.68/3xf.d8b.myftpupload.com/wp-content/uploads/2020/03/qtq80-nsbUtH.jpeg?time=1586443498") no-repeat center',
        height: 192 + 'px',
        width: 308 + 'px'
      },
      visionContent: '“To be a respected solutions company focused on combining state-of-the-art of Machine Learning, AI algorithms and delivering world-class quality big data solutions.”',
      missionContent: '“Simplifying delivery of complex big data with our innovative services and continuously optimizing our every product to improve customers’ experience.”'

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
