<template>
<transition name="fade">
  <div class="info-container" v-show="showInfo">

    <div class="close" @click="close()">
      <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path xmlns="http://www.w3.org/2000/svg"
          d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
          fill="#ffffff"></path>
      </svg>
    </div>
    <div class="info-wrapper  hide-scrollbar">
      <div class="left">
        <div class="title">

          <h1>OBSESSION</h1>
          <h2>Transmediation einer Musik</h2>
        </div>
        <Credits class="credits-desktop"></Credits>
      </div>
      <div class="right ">

        <div class="text">

          <p>The violin is heard in all its virtuosity in the four movements of the second solo sonata OBSESSION by the Belgian composer Eugène Ysaÿe. The pieces are known for the masterful expressionistic violin sound and high technical demands.
            Played
            by violinist Philipp Bohnen of the Berliner Philharmoniker, the notes resound sometimes powerfully and erratically, sometimes playfully and delicately. As an acoustic experience, however, the melodies remain abstract. They are neither
            visible
            nor tangible. </p>
          <p>Visual artist Hannah Bohnen transforms the violin playing and makes it visually experienceable. Using motion tracking, she translates the music-making bow hand into patterns of movement. The action as the origin of the sound
            becomes the central object of her eponymous work OBESSION. Four sweeping lines emerge that permeate the space and reflect the rhythm of the individual movements. Using a wood shaper, the artist inscribes the contours in large-format
            wooden
            panels, finishing them with a black, highly glossy varnish. During this process, structures and interruptions form, seemingly setting the surface in motion and emphasizing the dynamics of the lines. The ephemeral moment of play is
            extracted
            from its fleetingness and captured. </p>
          <p>In the process of transmediation, it materializes into lines of movement and acquires a physicality. Via the reflection of the varnish, the mirror image of the space appears on the panels. Their surface
            texture changes and with every movement of the viewer the mirrored environment deforms anew. The panels visualize the violin playing and place it in relation to its surroundings. This results in an immediate interaction between space and
            time. The faded music is confronted with the present reflection and creates an anachronistic moment. Temporality calls itself into consciousness on the surface of the panels and can be experienced there.</p>
        </div>
      </div>
      <Credits class="credits-mobile"></Credits>

    </div>
  </div>
</transition>
</template>

<script>
import Credits from './Credits.vue'


export default {
  data() {
    return {
      showInfo: false,
      isMusicPlaying: false
    }
  },
  components: {
    Credits
  },
  methods: {
    close() {
      this.$root.$emit('showInfo')
    }

  },
  mounted() {
    this.$root.$on('isMusicPlaying', (isMusicPlaying) => {
      this.isMusicPlaying = isMusicPlaying
    })
    this.$root.$on('showInfo', () => {
      this.showInfo = !this.showInfo
      if (!this.isMusicPlaying) this.$root.$emit('forceHoverAll', this.showInfo)
    })
  }
}
</script>

<style lang="scss" scoped>
$margin: 1em;
.credits-mobile {
    @include from($tablet) {
        display: none;
    };
}
.credits-desktop {
    @include until($tablet) {
        display: none;
    };
}
.close {
    position: absolute;
    top: 1em;
    right: 1em;
    z-index: 100;
    padding: 1em;
    cursor: pointer;
    @include until($tablet) {
        top: 0;
        right: 0;
    };
}
.info-container {
    height: calc(100vh - var(--nav-height) - (2*#{$margin}));
    width: calc(100% - (2*#{$margin}));
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    overflow: hidden;
    // background: rgba(255,255,255,.5);
    border-radius: 1em;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.15);
    background: rgba(255,255,255,.22);
    border-radius: 4rem;
    margin: $margin;
    padding: 2em;
    @include until($tablet) {
        border-radius: 2rem;
        height: calc(var(--app-height) - var(--nav-height) - (2*#{$margin}) - 24px);
    };
}
.info-wrapper {
    // margin: $margin;
    padding: 2em;
    height: calc(var(--app-height) - var(--nav-height) - (2*#{$margin}));
    width: calc(var(100vw) - (2*#{$margin}));
    // color: black;
    position: fixed;
    overflow-y: auto;
    top: 0;
    left: 0;
    color: white;
    font-family: 'Nimbus Mono';
    // z-index: 99;
    // padding: 2em;
    display: flex;
    flex-direction: row;
    @include until($tablet) {
        flex-direction: column;
        padding: 2em;
        overflow-x: hidden;

        width: 100%;
        height: 100%;
        margin-top: 1em;
        border-radius: 3em;
        height: calc(var(--app-height) - var(--nav-height) - (2*#{$margin}) - 24px);
    };
    .title {

        font-size: 2rem;
        line-height: 1;
        flex: 1;
        @include until($tablet) {
            font-size: 1.25rem;
        };
    }
    .column {
        padding: 0;
        font-size: small;
    }
    .text {
        font-size: 1.3rem;
        letter-spacing: -0.1px;
        line-height: 1.4;
    }
    .text:not(.credits) {
        padding-left: 1em;
        padding-right: 1em;
        @include until($tablet) {
            padding: 2em 0;
            font-size: 1rem;
        };
    }
    & > div {
        flex: 1;
    }
}

.left {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    @include until($tablet) {
        position: relative;
    };
}
.right {
    display: flex;
    flex-direction: column;
    flex: 1;
    //  order: -1;
}

p {
    padding-bottom: 2rem;
}
h1 {
    font-family: 'Monument Grotesk';
}
</style>
