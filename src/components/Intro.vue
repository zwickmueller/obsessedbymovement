<template>
<transition name="circle-out">
  <div class="loader center-all" v-if="show">
    <div class="intro flex-center-h">
      <div class="intro-text">

        <p><span class="title">OBSESSED BY MOVEMENT</span> Manifestations of musical ephemerality based on the interdisciplinary work of Hannah Bohnen</p>
        <!-- <p>{{loadingProgress}}</p> -->
      </div>

      <div class="enter">
        <button type="button" :disabled="!loaded" @click="enterMuted(false)" class="reset" name="button"> {{loaded ? 'Enter': 'loading'}}</button>
      </div>
      <div class="enter-mute" :class="loaded ? '':'v-hide'">
        <button type="button" @click="enterMuted(true)" class="reset" name="button"> Enter without sound</button>

      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      loadingProgress: 0,
    }
  },
  computed: {
    loaded() {
      return this.loadingProgress == 1
    }
  },
  methods: {
    enterMuted(muted) {
      this.show = false
      if (!muted) this.$root.$emit('playMusic', true)
    }
  },
  mounted() {
    this.$root.$on('loading', (payload) => {
      this.loadingProgress = payload
      console.log(payload, "from info");
    })
  }
}
</script>

<style lang="scss" scoped>
.loader {
    // clip-path: circle(150% at 50% 50%);

    @include fill-height-and-width;
    background: black;
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    // transition: 1s ease all;
    font-family: 'Nimbus Mono';
    button,
    span {

        font-family: 'Monument Grotesk';
    }
    span.title {
        padding-bottom: 1rem;
        font-size: 2rem;
        display: block;
    }
}
.intro {
    line-height: 1.25;
    max-width: 450px;
    text-align: center;
    font-size: 1.5rem;
    @include until($tablet) {
        font-size: 1.2rem;
    }
}
.intro-text {
    padding-bottom: 2em;
    @include until($tablet) {
        padding: 1em 1em 2em;
    }
}

.enter-mute {
    font-size: small;
    margin-top: 1em;
    transition: all 0.3s ease;
    border-bottom: 1px solid transparent;
    &:hover {
        border-bottom: 1px solid;
    }
}
.enter button {
    font-size: 1.5rem;
    border: 2px solid white;
    padding: 0.1em 1em 0.05em;
    transition: all 0.3s ease;
    text-transform: uppercase;
    &:hover {
        color: black;
        background: white;
    }
}
</style>
