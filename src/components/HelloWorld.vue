<template>
  <v-app>
    <!-- <v-app-bar
      app
      color="primary"
      dark
    /> -->
    <v-card
      max-width="400"
      class="mx-auto my-auto"
      hover
    >
      <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
        >
          <v-sheet
            :color="colors[i]"
            height="100%"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <!-- <div class="display-3">{{ slide }} Slide</div> -->
              <div class="display-3"><img v-bind:src="slide"></div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <v-card-title>My Carousel</v-card-title>
      <v-card-subtitle class="font-italic font-weight-black">fkkbm</v-card-subtitle>
      <v-avatar class="mx-6">
        <img
          src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg"
          alt="Fkkbm"
        >
      </v-avatar>
      <v-card-text>この美しい写真は決して私が撮影したものではない。しかしこの場所が素晴らしいことを誰もが分かる写真であり私が最もこの写真を素晴らしいと思っているから顔出ししたんだよ。</v-card-text>
    </v-card>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'https://cdn.pixabay.com/photo/2017/12/17/19/08/bridge-3024773_960_720.jpg',
          'https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_960_720.jpg',
          'https://cdn.pixabay.com/photo/2012/08/06/00/53/bridge-53769_960_720.jpg',
          'https://cdn.pixabay.com/photo/2013/04/03/12/05/tree-99852_960_720.jpg',
          'https://cdn.pixabay.com/photo/2017/04/09/09/56/avenue-2215317_960_720.jpg',
        ],
      }
    },
  }
</script>