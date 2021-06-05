<template>
<div id="app">
  <Intro></Intro>
  <Info></Info>
  <InteractiveObject />
  <Navigation></Navigation>
  <div class="logo-wrapper center-all">
    <!-- {{isMusicPlaying}} -->
    <div class="logo">
      <img :class="isMusicPlaying ? 'is-playing': ''" :src="require('@/assets/title.png')" alt="">
      <!-- <span :class="'char'+(i +1)" v-for="(t,i) in text">{{t}}</span> -->
    </div>
  </div>
</div>
</template>

<script>
import InteractiveObject from './components/InteractiveObject.vue'
import Info from './components/Info.vue'
import Intro from './components/Intro.vue'
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  data() {
    return {
      text: 'OBSESSED BY MOVEMENT',
      isMusicPlaying: false
    }
  },
  components: {
    InteractiveObject,
    Info,
    Navigation,
    Intro
  },
  mounted() {
    this.$root.$on('isMusicPlaying', (bool) => this.isMusicPlaying = bool)

  }
}
</script>

<style lang="scss">
#app {
    width: 100%;
    height: var(--app-height);
}
.logo-wrapper {
    position: absolute;
    @include fullscreen;
    z-index: 23;
    pointer-events: none;
    height: calc(100% - 64px);
}
.logo {

    img {
        pointer-events: none;
        transition: all 1s ease;
        max-width: 250px;
        transform: rotateZ(0deg);
        animation: rotate 20s linear paused infinite backwards;
        @include until($tablet) {

            max-width: 120px;
        };
        &.is-playing {
            transition: none;
            // transform: rotateZ(-359deg);
            // animation: rotate 3s infinite linear forwards;
            animation-play-state: running;
        }
    }
    position: relative;
    // transform: translateY(-135px);
    // @include rotated-text(20, 260deg, 0);
    span {
        height: 135px;
        position: absolute;
        font-size: 2rem;
        width: 1px;
        left: 0;
        top: 0;
        transform-origin: bottom center;
    }
}
</style>
