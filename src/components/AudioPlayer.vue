<template >
<div class="player">
  <div class="player-controls">

    <div class="center-all play-button">
      <a v-on:click.prevent="playing = !playing" title="Play/Pause" href="#">
        {{playing ? 'pause' : 'play'}}
      </a>
    </div>
    <div class="no-hover player-time-wrapper">
      <div v-on:click="seek" class="player-progress" title="Time played : Total time">
        <div :style="{ width: this.percentComplete + '%' }" class="player-seeker"></div>
      </div>
      <div class="player-time">
        <div class="player-time-current">{{ currentTime }}</div>
        <div class="player-time-total">{{ durationTime }}</div>
      </div>
    </div>
    <div class="center-all mute-button" style="min-width: 106px">
      <a v-on:click.prevent="mute" title="Mute" href="#">
        {{volume ? 'mute' : 'unmute'}}
      </a>
    </div>
    <div class="player-volume" @click="seekVolume">
      <!-- <a v-on:click.prevent="" title="Volume" href="#"> -->
      <!-- {{volume}} -->
      <div class="volume-title center-all">
        <span>Volume</span>
      </div>
      <div class="volume-wrapper">

        <div class="volume" :style="'width:' + volume + 'px'">

        </div>
      </div>
      <!-- <input v-model.number="volume" type="range" min="0" max="100" /> -->
      <!-- </a> -->
    </div>
  </div>
  <audio :loop="innerLoop" ref="audiofile" :src="file" preload="auto" style="display: none;"></audio>
</div>
</template>

<script>
const convertTimeHHMMSS = (val) => {
  let hhmmss = new Date(val * 1000).toISOString().substr(11, 8);

  return hhmmss.indexOf("00:") === 0 ? hhmmss.substr(3) : hhmmss;
};

export default {
  props: {
    file: {
      type: String,
      default: null
    },
    autoPlay: {
      type: Boolean,
      default: false
    },
    loop: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    audio: undefined,
    currentSeconds: 0,
    durationSeconds: 0,
    innerLoop: false,
    loaded: false,
    playing: false,
    previousVolume: 35,
    volume: 100
  }),
  computed: {
    currentTime() {
      return convertTimeHHMMSS(this.currentSeconds);
    },
    durationTime() {
      return convertTimeHHMMSS(this.durationSeconds);
    },
    percentComplete() {
      return parseInt(this.currentSeconds / this.durationSeconds * 100);
    },
    muted() {
      return this.volume / 100 === 0;
    }
  },
  watch: {
    playing(value) {
      console.log(this.playing);
      this.$root.$emit('isMusicPlaying', this.playing)
      if (value) {
        this.$root.$emit('forceHoverAll', true)
        return this.audio.play();
      }
      this.audio.pause();
      this.$root.$emit('forceHoverAll', false)
    },
    volume(value) {
      this.audio.volume = this.volume / 100;
    }
  },
  methods: {
    // download() {
    //   this.stop();
    //   window.open(this.file, 'download');
    // },
    load() {
      if (this.audio.readyState >= 2) {
        this.loaded = true;
        this.durationSeconds = parseInt(this.audio.duration);
        return this.playing = this.autoPlay;
      }

      throw new Error('Failed to load sound file.');
    },
    mute() {
      if (this.muted) {
        return this.volume = this.previousVolume;
      }

      this.previousVolume = this.volume;
      this.volume = 0;
    },
    seek(e) {
      if (e.target.tagName === 'SPAN') {
        return;
      }

      const el = e.target.getBoundingClientRect();
      const seekPos = (e.clientX - el.left) / el.width;
      console.log(e.clientX, el.left, el.width, el);

      this.audio.currentTime = parseInt(this.audio.duration * seekPos);
    },
    seekVolume(e) {
      if (e.target.tagName === 'SPAN') {
        return;
      }

      const el = e.target.getBoundingClientRect();
      const seekPos = (e.clientX - el.left) / el.width;
      //  console.log(e.clientX, el.left, el.width, el);
      console.log(seekPos);
      this.volume = seekPos * 100

      //  this.audio.currentTime = parseInt(this.audio.duration * seekPos);
    },
    stop() {

      this.playing = false;
      this.audio.currentTime = 0;
    },
    update(e) {
      this.currentSeconds = parseInt(this.audio.currentTime);
    }
  },
  created() {
    this.innerLoop = this.loop;
  },
  mounted() {
    this.audio = this.$el.querySelectorAll('audio')[0];
    this.audio.addEventListener('timeupdate', this.update);
    this.audio.addEventListener('loadeddata', this.load);
    this.audio.addEventListener('pause', () => {
      this.playing = false;
    });
    this.audio.addEventListener('play', () => {
      this.playing = true;
    });
    this.$root.$on('playMusic', (payload) => this.playing = true)
  }
}
</script>

<style lang="scss" scoped>
$player-bg: transparent;
$player-border-color: #fff;
$player-link-color: #fff;
$player-progress-color: transparent;
$player-seeker-color: #fff;
$player-text-color: #fff;
$border-width: 1px;
input {
    user-select: none;
}

.player {
    background-color: $player-bg;
    color: $player-text-color;
    display: flex;
    height: 63px;
    font-family: "Nimbus Mono";
}

.player-controls {
    display: flex;
    @include until($tablet) {
        max-width: 100vw;
    };

    //height: 100%;
    > div {
        border-right: $border-width solid $player-border-color;
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        min-width: 100px;

        &:hover {
            // &:not(.no-hover):hover {
            font-family: "Monument Grotesk";
            letter-spacing: 2px;
        }

        &:last-child {
            border-right: none;
        }
        &:first-child {
            border-left: $border-width solid $player-border-color;
        }

        a {
            color: $player-link-color;
            display: block;
            line-height: 0;
            padding: 1em 1.5em;
            text-decoration: none;
        }
    }
}
.mute-button,
.play-button {
    @include until($tablet) {
        flex: 1;
        border-left: none!important;
        border-right: none !important;
    };
}
.player-time-wrapper {
    @include until($tablet) {
        border-left: $border-width solid $player-border-color !important;
        flex: 2;
    };

}
.player-volume {
    cursor: pointer;

    .volume {
        // width: 100%;
        height: 100%;
        background: $player-seeker-color;
        width: 100px;
        //  pointer-events: none;
    }
    .volume-title {
        //pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        mix-blend-mode: difference;

    }
    .volume-wrapper {

        clip-path: polygon(100% 0, 0% 100%, 100% 100%);
    }
    min-width: 100px;
    position: relative;
    & > div {
        pointer-events: none;
        width: 100%;
        height: 100%;
    }
    @include until($tablet) {
        display: none !important;

    };
}
.player-progress {
    background-color: $player-progress-color;
    cursor: pointer;
    height: 100%;
    min-width: 200px;
    position: relative;
    // @include until($tablet) {
    //     min-width: 0;
    //     flex: 2;
    // };
    .player-seeker {
        background-color: $player-seeker-color;
        bottom: 0;
        left: 0;
        position: absolute;
        top: 0;
        pointer-events: none;
    }
}

.player-time {
    pointer-events: none;
    display: flex;
    position: absolute;
    justify-content: space-between;
    // bottom: 0;
    z-index: 1;
    width: 100%;
    mix-blend-mode: difference;

    .player-time-current {
        // font-weight: 700;
        padding-left: 1em;
    }

    .player-time-total {
        // opacity: 0.5;
        padding-right: 1em;
    }
}
</style>
