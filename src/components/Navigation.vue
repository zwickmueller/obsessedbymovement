<template>
<div class="navigation-area">
  <div class="nav-info-mobile" @click="toggleInfo">
    <h1>info</h1>
  </div>
  <div class="navigation-wrapper">
    <!-- <div class="nav-title">
      <h1>OBSESSED BY MOVEMENT</h1>
    </div> -->
    <div class="nav-info" @click="toggleInfo">
      <h1>info</h1>
    </div>
    <div class="nav-info-controls" style="flex-grow:1">
      <transition name="fade">
        <span v-if="showControls">Left Click and Drag: Rotate Shape | Right Click and Drag: Move Shape | Doubleclick: Toggle Fullscreen | Mousewheel: Zoom</span>
      </transition>
    </div>
    <AudioPlayer :file="music.src"></AudioPlayer>

  </div>
</div>
</template>

<script>
import AudioPlayer from './AudioPlayer.vue'

export default {
  name: 'Navigation',
  components: {
    AudioPlayer
  },
  data() {
    return {
      music: {
        src: require('@/assets/main.mp3')
      },
      // showInfo: false,
      showControls: false
    }
  },
  methods: {
    toggleInfo() {
      // this.showInfo = !this.showInfo
      // this.$root.$emit('showInfo', this.showInfo)
      this.$root.$emit('showInfo')
    }
  },
  mounted() {
    this.$root.$on('anyCanvasHovered', (bool) => {
      this.showControls = bool
    })
  }
}
</script>

<style lang="scss" scoped>
.navigation-area {
    @include until($tablet) {
        // position: fixed;
        // bottom: 0;
        background: black;
        max-width: 100vw;
    };
    //  background-color: green;
    width: 100%;
    height: var(--nav-height);
    min-height: var(--nav-height);
    border-top: 1px solid white;
    .navigation-wrapper {
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    h1 {
        text-transform: uppercase;
    }
    .nav-title {
        padding-right: 2em;

    }
    .nav-info {
        padding-left: 1em;
        @include until($tablet) {
            display: none;
        };
    }
    .nav-info-mobile {
        position: fixed;
        left: 0;
        bottom: 64px;
        font-weight: 100;
        width: 100%;
        border-top: 1px solid white;
        text-align: center;
        font-size: 8px;
        @include from($tablet) {
            display: none;
        };
    }
    // padding-right: 0;
    .nav-info:hover {
        cursor: pointer;
        font-family: "Nimbus Mono";
    }
    .nav-info-controls {
        text-align: center;
        opacity: 0.25;
        span {
            font-size: small;
        }
        @include until($tablet) {
            display: none;
        };
    }
}
</style>
