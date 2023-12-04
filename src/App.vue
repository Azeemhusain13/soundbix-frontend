<template >

  <!-- <HelloWorld ></HelloWorld> -->
  <!-- <HeaderSoundBix></HeaderSoundBix>
  <BannerSoundBix></BannerSoundBix> -->
  <HeaderSoundBix></HeaderSoundBix>
  <routerView></routerView>
  <FooterSoundBix></FooterSoundBix>
  <!-- <RouterLink></RouterLink> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HeaderSoundBix from './components/HeaderSoundBix.vue'
import FooterSoundBix from './components/FooterSoundBix.vue';
// import BannerSoundBix from './components/BannerSoundBix.vue'

// import { RouterLink, routerView } from 'vue-router';
export default {
  name: 'App',
  components: {
    HeaderSoundBix, FooterSoundBix,
}
}
</script>

<style>
</style>
