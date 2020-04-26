<template>
  <div class="news" id="coronavirusUpdate">
    <div>
      <iframe seamless="" scrolling="no"
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTw8X4gXprDvqzoWC_wah6kY6h3ZYOli-7n3FDCj_rgtn7NSU6Q9nj2EUz7-O7Cf1FLXBYeZE-CAUWj/pubchart?oid=1547971389&amp;format=interactive"
      style="opacity: 1; visibility: visible;" frameborder="0"></iframe>
    </div>
    <div>
      <iframe seamless="" scrolling="no"
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTw8X4gXprDvqzoWC_wah6kY6h3ZYOli-7n3FDCj_rgtn7NSU6Q9nj2EUz7-O7Cf1FLXBYeZE-CAUWj/pubchart?oid=2011365388&amp;format=interactive"
      style="opacity: 1; visibility: visible;" frameborder="0"></iframe>
    </div>
    <div>
      <iframe seamless="" scrolling="no"
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTw8X4gXprDvqzoWC_wah6kY6h3ZYOli-7n3FDCj_rgtn7NSU6Q9nj2EUz7-O7Cf1FLXBYeZE-CAUWj/pubchart?oid=527963811&amp;format=interactive"
      style="opacity: 1; visibility: visible;" frameborder="0"></iframe>
    </div>
    <div>
      <iframe seamless="" scrolling="no"
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTw8X4gXprDvqzoWC_wah6kY6h3ZYOli-7n3FDCj_rgtn7NSU6Q9nj2EUz7-O7Cf1FLXBYeZE-CAUWj/pubchart?oid=12462742&amp;format=interactive"
      style="opacity: 1; visibility: visible;" frameborder="0"></iframe>
    </div>
    <div>
      <iframe seamless="" scrolling="no"
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTw8X4gXprDvqzoWC_wah6kY6h3ZYOli-7n3FDCj_rgtn7NSU6Q9nj2EUz7-O7Cf1FLXBYeZE-CAUWj/pubchart?oid=1801181287&amp;format=interactive"
      style="opacity: 1; visibility: visible;" frameborder="0"></iframe>
    </div>
    <div>
      <p>Source data: https://ncov2019.live/data/global</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoronavirusUpdate',
  components: {
  }
}
</script>

<style lang="scss" scoped>
// @media (max-width: 768) {
//   .news {
//     div {
//       iframe {
//         width: 500px;
//         height: 200px;
//       }
//     }
//   }
// }
.news {
  div {
    margin-top: 20px;;
    iframe {
      width: 100%;
      height: 500px;
    }
  }
}
</style>
