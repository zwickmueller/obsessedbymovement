<template>
<div class="outer-flex" :style="loaded ? 'opacity:1': 'opacity:0'" @mouseenter="hoverAnyCanvas(true)" @mouseleave="hoverAnyCanvas(false)">
  <div ref="canvasArea" class="canvas-area">
    <div class="inner-flex">
      <div :id="'obj' + i + '-wrapper'" :ref="'obj' + i" class="flex-item cross" v-for="i in 4" v-show="anyOpen ? canvasObject['obj' + i].display : true">
        <div class="canvas-info">
          <span class="hide-on-mobile">{{canvasObject['obj' + i].number}}</span>
          <span>{{canvasObject['obj' + i].name}}</span>
          <span class="fullscreen-button" v-if="canvasObject['obj' + i].display" @click="saveScreenshot('obj' + i)" @mouseenter="hoverInfo('obj' + i,'enter')" @mouseleave="hoverInfo('obj' + i,'leave')">Download Screenshot</span>
          <span class="fullscreen-button hide-on-mobile" @click="openCanvas('obj' + i)">{{anyOpen ? "exit fullscreen" : "fullscreen"}}</span>
          <span class="fullscreen-button hide-on-desktop" @click="openCanvas('obj' + i)">{{"double tap to toggle fullscreen"}}</span>
        </div>
        <canvas tabindex="0" @dblclick="openCanvas('obj' + i)" :id="'obj' + i" width="100%" height="100%"></canvas>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import obj1 from './objects/obj1.js'
import obj2 from './objects/obj2.js'
import obj3 from './objects/obj3.js'
import obj4 from './objects/obj4.js'

// obj3.length = 1116
// obj4.length = 1116
const allObjects = [
  obj1, obj2, obj3, obj4
]

if (window.innerWidth < 768) {

  for (var i = 0; i < allObjects.length; i++) {
    allObjects[i].length = 1020
    console.log(allObjects[i].length, i, ' length');
  }
  const appHeight = () => {
    setTimeout(() => {

      const doc = document.documentElement
      doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    }, 0)
  }
  window.addEventListener('resize', appHeight)
  appHeight()
}



import anime from 'animejs/lib/anime.es.js';
var debounce = require('lodash.debounce');


export default {
  name: 'InteractiveObject',
  data() {
    return {
      // music: {
      //   src: require('@/assets/main.mp3')
      // },
      loaded: false,
      anyCanvasHovered: false,
      canvasObject: {
        obj1: {
          open: false,
          display: false,
          number: 'I',
          name: 'PRÉLUDE. Poco vivace'
        },
        obj2: {
          open: false,
          display: false,
          number: 'II',
          name: 'MALINCONIA. Poco lento'
        },
        obj3: {
          open: false,
          display: false,
          number: 'III',
          name: 'SARABANDE. "Danse des ombre." Lento'
        },
        obj4: {
          open: false,
          display: false,
          number: 'IV',
          name: 'LES FURIES. Allegro furiosa'
        },
      }
    }
  },
  // components: {
  //   AudioPlayer
  // },
  computed: {
    anyOpen() {
      // return canvasObject.forEach((object) => )
      return Object.values(this.canvasObject).map(obj => obj.display).some(bool => bool == true)
    }
  },
  methods: {
    hoverAnyCanvas(bool) {
      if (!this.loaded) return
      this.anyCanvasHovered = bool
      this.$root.$emit('anyCanvasHovered', this.anyCanvasHovered)
    },
    exlusiveBooleans(property, id) {
      Object.keys(this.canvasObject).forEach((obj) => {
        obj == id ?
          (this.canvasObject[obj][property] = !this.canvasObject[obj][property]) :
          (this.canvasObject[obj][property] = false);
      });
    },
    saveScreenshot(id) {
      if (CABLES) {
        setTimeout(() => {
          CABLES[id].pause()
          CABLES[id].config.saveScreenshot()

        }, 300)
        CABLES[id].resume()
      }
    },
    hoverInfo(id, direction) {

      if (direction == "enter") {
        CABLES[id].setVariable("forceHover", true);
      } else {
        CABLES[id].setVariable("forceHover", false);
      }
      if (!CABLES[id].isPlaying()) CABLES[id].resume()
      this.resizeCanvases()
    },
    openCanvas(canvasId) {
      event.preventDefault()
      event.stopPropagation();
      const canvas = document.querySelector('#' + canvasId)
      const parent = canvas.parentNode

      this.exlusiveBooleans('open', canvasId)

      const refContainer = [this.$refs.obj1, this.$refs.obj2, this.$refs.obj3, this.$refs.obj4]
      const padding = 1 //3
      const navHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'))
      const height = this.$refs.canvasArea.getBoundingClientRect().height


      if (this.canvasObject[canvasId].open) {
        anime({
          targets: refContainer,
          opacity: 0,
          duration: 400,
          easing: 'linear',
          complete: (anim) => {

            anime({
              targets: refContainer,
              opacity: 1,
              duration: 400,
              easing: 'linear',
              begin: (anim) => {
                this.exlusiveBooleans('display', canvasId)
                console.log(this.$refs.canvasArea.getBoundingClientRect().height);
                parent.classList.add('open')
                CABLES[canvasId].cgl.setSize(window.innerWidth, height)

              }
            });

          }
        });

      } else {

        // this.$nextTick(() => {
        //
        // })
        anime({
          targets: refContainer,
          opacity: 0,
          duration: 400,
          easing: 'linear',
          complete: (anim) => {
            anime({
              targets: refContainer,
              opacity: 1,
              duration: 400,
              easing: 'linear',
              begin: (anim) => {
                this.exlusiveBooleans('display', canvasId)
                parent.classList.remove('open')
                let width = parent.getBoundingClientRect().width // - (padding * 1)
                let height = parent.getBoundingClientRect().height // - (padding * 1)
                console.log(width, height);
                CABLES[canvasId].cgl.setSize(width, height)
              },
              complete: () => {
                this.resizeCanvases()

              }
            });

          }
        });


      }
      if (window.innerWidth < 768) {
        console.log("mobile", event);
        canvas.click()
        canvas.focus()
      }
    },
    resizeCanvases() {
      Object.keys(this.canvasObject).forEach((id) => {

        const dimensions = document.querySelector('#' + id + '-wrapper').getBoundingClientRect()

        let width = dimensions.width // - (padding * 1)
        let height = dimensions.height // - (padding * 1)
        console.log(width, height);
        CABLES[id].cgl.setSize(Math.ceil(width), Math.floor(height))
      })
    }
  },
  mounted() {
    // console.log(Object.keys(this.canvasObject));
    this.$root.$on('forceHoverAll', (payload) => {
      Object.keys(this.canvasObject).forEach((id) => {
        CABLES[id].setVariable("forceHover", payload);

      })
    })

    // disable rubberband effect on mobile devices
    // document.getElementById('glcanvas').addEventListener('touchmove', (e) => {
    //   e.preventDefault();
    // }, false);
    window.addEventListener('resize', debounce(this.resizeCanvases, 100))

    function patchInitialized(patch) {
      // You can now access the patch object (patch), register variable watchers and so on
    }
    let loading = 0
    const patchFinishedLoading = (id) => {
      loading++
      let loadingProgress = loading / allObjects.length
      this.$root.$emit('loading', loadingProgress)
      console.log(allObjects.length);
      console.log(loading);
      if (loading == allObjects.length) {
        // if (id == 'obj4') {
        this.$nextTick(() => {
          console.log("loaded", id);
          this.loaded = true
          this.resizeCanvases()
        })
      }
      // this.$nextTick(() => {
      //
      //   const dimensions = document.querySelector('#' + id + '-wrapper').getBoundingClientRect()
      //   let width = dimensions.width // - (padding * 1)
      //   let height = dimensions.height // - (padding * 1)
      //   console.log(width, height);
      //   CABLES[id].cgl.setSize(width, height)
      // })
      //CABLES[id].off('resize')
    }

    document.addEventListener('CABLES.jsLoaded', (event) => {
      for (var i = 0; i < allObjects.length; i++) {
        let arrayName = 'obj' + (i + 1)
        let object = allObjects[i]

        CABLES[arrayName] = new CABLES.Patch({
          patch: CABLES.exportedPatch,
          prefixAssetPath: '',
          glCanvasId: arrayName,
          glCanvasResizeToWindow: false,
          glCanvasResizeToParent: false,
          onPatchLoaded: patchInitialized,
          onFinishedLoading: patchFinishedLoading(arrayName),
          variables: {
            objectArray: object
          },
          // canvas: {
          //   alpha: true,
          //   premultipliedAlpha: true
          // }
        });

      }
      this.resizeCanvases()
    });
  }
}
</script>

<style  lang="scss">
$borderwidth: 1px;
$borderstyle: $borderwidth solid white;
$borderstyle-black: $borderwidth solid black;
$nav-height: 64px;
:root {
    --nav-height: #{$nav-height};
    --app-height: 100vh;
}

.outer-flex {
    display: flex;
    flex-direction: column;
    // min-height: 100vh;
    // max-height: 100vh;
    // @include fill-height-and-width;
    height: 100%;
    max-height: calc(var(--app-height) - #{$nav-height});
    .canvas-area {
        flex: 1 100%;
        //background: pink;
        min-height: calc(var(--app-height) - #{$nav-height});
        max-height: calc(var(--app-height) - #{$nav-height});
        @include fill-height-and-width;
        .inner-flex {
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            height: 100%;
            justify-content: space-between;
            // @include until($tablet) {
            //     flex-flow: column;
            // };
        }
        .flex-item {
            position: relative;
            flex: 0 50%;
            width: 50%;
            height: 50%;
            // @include until($tablet) {
            //     width: 100%;
            // };
            //  background: purple;
            &:hover .canvas-info {
                opacity: 1;
            }
            &.open {
                flex: 0 100%;
                height: 100%;
                width: 100%;

            }
            &.open:after {
                max-width: calc(100% - 1px);
                visibility: hidden;
            }
            &:not(.open):nth-child(even):after {
                max-width: calc(100% - 1px);
            }
            &:not(.open):nth-child(1):after {
                border-right: none;
                border-bottom: none;
            }
            &:not(.open).cross:nth-child(1):after {
                border-right: none;
                border-bottom: none;
                border: none;
                bottom: 0;
                right: 0;
                left: unset;
                top: unset;
            }
            &:not(.open):nth-child(2):after {
                // border-right: none;
                border-bottom: none;
            }
            &:not(.open).cross:nth-child(2):after {
                border-bottom: none;
                border-right: none;
                bottom: 0;
                border-top: none;
                top: unset;
            }
            &:not(.open):nth-child(3):after {
                border-right: none;
            }
            &:not(.open).cross:nth-child(3):after {
                border-right: none;
                border-left: none;
                border-bottom: none;
                right: 0;
                left: unset;
            }
            &:not(.open).cross:nth-child(4):after {
                border-right: 0;
                border-bottom: none;

            }
            &:after {
                overflow: hidden;
                //    border-radius: 1em;
                border: 1px solid white;
                content: '';
                // background: red;
                background-clip: padding-box;
                pointer-events: none;
                display: block;
                @include fill-height-and-width;
                position: absolute;
                top: 0;
                //  @include fullscreen;
                left: 0;
                width: 10px;
                height: 10px;
                @include until($tablet) {
                    content: none !important;
                };
            }
            &:not(.open).cross:after {
                overflow: hidden;
                //    border-radius: 1em;
                border: 1px solid white;
                content: '';
                // background: red;
                background-clip: padding-box;
                pointer-events: none;
                display: block;
                width: 150px;
                height: 150px;
                transition: all 1s ease;

            }
            &:not(.open).cross:hover:after {
                width: 100%;
                height: 100%;
            }
            &:not(.open).cross:nth-child(3):hover + .cross:after {
                height: 100%;
            }
            &:not(.open).cross:nth-child(1):hover + .cross:after {
                height: 100%;
            }
            &:not(.open).cross:nth-child(1):hover ~ .cross:not(:nth-child(4)):not(:nth-child(2)):after {
                width: 100%;
            }
            &:not(.open).cross:nth-child(2):hover ~ .cross:not(:nth-child(3)):not(:nth-child(1)):after {
                width: 100%;
            }

            // RING
            &:not(.open).cross:before {
                overflow: hidden;
                //    border-radius: 1em;
                border: 1px solid white;
                content: '';
                // background: red;
                // background-clip: padding-box;
                pointer-events: none;
                display: block;
                background: rgba(0,0,0,0);
                z-index: 10;
                position: absolute;
                width: 150px;
                height: 150px;
                transition: all 1s ease;
                @include until($tablet) {
                    width: 75px;
                    height: 75px;
                };
            }
            &:not(.open).cross:nth-child(1):before {
                bottom: 0;
                right: 0;
                border-radius: 100% 1% 0 0;
                border-right: $borderstyle-black;
                border-bottom: $borderstyle-black;
                @include until($tablet) {
                    border-right: none;
                    border-bottom: none;
                };
            }
            &:not(.open).cross:nth-child(2):before {
                border-left: $borderstyle-black;
                border-bottom: $borderstyle-black;
                bottom: 0;
                left: 0;
                border-radius: 0 100% 1% 0;
                @include until($tablet) {
                    border-left: none;
                    border-bottom: none;
                };
            }
            &:not(.open).cross:nth-child(3):before {
                border-right: $borderstyle-black;
                border-top: $borderstyle-black;
                top: 0;
                right: 0;
                border-radius: 0 0 1% 100%;
                @include until($tablet) {
                    border-right: none;
                    border-top: none;
                };
            }
            &:not(.open).cross:nth-child(4):before {
                border-left: $borderstyle-black;
                border-top: $borderstyle-black;
                border-radius: 0 0 100% 1%;
                @include until($tablet) {
                    border-left: none;
                    border-top: none;
                };
            }
            @for $i from 1 through 4 {
                &:not(.open).cross:nth-child(#{$i}):hover:before {
                    // border-color: black;
                    // border: 2px black solid;
                }
            }
            &:not(.open) canvas {
                max-height: 50vh;

            }
        }
    }

}

.canvas-info {
    position: absolute;
    top: 0;
    color: white;
    width: 100%;
    pointer-events: none;
    overflow: hidden;
    justify-content: space-between;
    display: flex;
    padding: 1rem;
    opacity: 0;
    transition: 1s opacity ease;
    line-height: 1;
    @include until($tablet) {
        padding: 0.5rem;
        font-size: 0.5rem;
    };
}
.fullscreen-button {
    pointer-events: all;
    cursor: pointer;
    padding-bottom: 0.25em;
    transition: border-bottom 0.375s ease;
    border-bottom: black solid 1px;
    &:hover {
        border-bottom: white solid 1px;

    }
}

canvas {
    display: block;
    outline: 0;
    margin: 0 !important;
    opacity: 1;
    line-height: 0;
    // height: 100% !important;
    width: 100% !important;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

}
</style>
