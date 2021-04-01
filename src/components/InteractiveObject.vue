<template>
<div class="outer-flex">
  <div ref="canvasArea" class="canvas-area">
    <div class="inner-flex">
      <div :id="'obj' + i + '-wrapper'" :ref="'obj' + i" class="flex-item cross" v-for="i in 4" v-show="anyOpen ? canvasObject['obj' + i].display : true">
        <div class="canvas-info">
          <span>{{canvasObject['obj' + i].number}}</span>
          <span>{{canvasObject['obj' + i].name}}</span>
          <span class="fullscreen-button" v-if="canvasObject['obj' + i].display" @click="saveScreenshot('obj' + i)" @mouseenter="hoverInfo('obj' + i,'enter')" @mouseleave="hoverInfo('obj' + i,'leave')">Download Screenshot</span>
          <span class="fullscreen-button" @click="openCanvas('obj' + i)">fullscreen</span>
        </div>
        <canvas :id="'obj' + i" width="100%" height="100%"></canvas>
      </div>
    </div>
  </div>
  <div class="navigation-area">
    <div class="navigation-wrapper">
      <div class="">
        <h1>OBSESSED BY MOVEMENT</h1>
      </div>
      <div class="" style="flex-grow:1">

      </div>
      <AudioPlayer :file="music.src"></AudioPlayer>

    </div>
  </div>
</div>
</template>

<script>
import obj1 from './objects/obj1.js'
import obj2 from './objects/obj2.js'
import obj3 from './objects/obj3.js'
import obj4 from './objects/obj4.js'
const allObjects = [
  obj1, obj2, obj3, obj4
]

import AudioPlayer from './AudioPlayer'

import anime from 'animejs/lib/anime.es.js';
var debounce = require('lodash.debounce');


export default {
  name: 'InteractiveObject',
  data() {
    return {
      music: {
        src: require('@/assets/main.mp3')
      },
      canvasObject: {
        obj1: {
          open: false,
          display: false,
          number: 'I',
          name: 'Shape 10'
        },
        obj2: {
          open: false,
          display: false,
          number: 'II',
          name: 'Shape 15'
        },
        obj3: {
          open: false,
          display: false,
          number: 'III',
          name: 'Shape 20'
        },
        obj4: {
          open: false,
          display: false,
          number: 'IV',
          name: 'Shape 17'
        },
      }
    }
  },
  components: {
    AudioPlayer
  },
  computed: {
    anyOpen() {
      // return canvasObject.forEach((object) => )
      return Object.values(this.canvasObject).map(obj => obj.display).some(bool => bool == true)
    }
  },
  methods: {
    exlusiveBooleans(property, id) {
      Object.keys(this.canvasObject).forEach((obj) => {
        obj == id ?
          (this.canvasObject[obj][property] = !this.canvasObject[obj][property]) :
          (this.canvasObject[obj][property] = false);
      });
    },
    saveScreenshot(id) {
      if (CABLES) {

        CABLES[id].config.saveScreenshot()
      }
    },
    hoverInfo(id, direction) {
      console.log(id, direction);
      if (direction == "enter") {
        CABLES[id].setVariable("forceHover", true);

      } else {
        console.log(CABLES[id]);
        CABLES[id].setVariable("forceHover", false);

      }
      this.resizeCanvases()
    },
    openCanvas(canvasId) {

      const canvas = document.querySelector('#' + canvasId)
      const parent = canvas.parentNode

      this.exlusiveBooleans('open', canvasId)
      // Object.keys(this.canvasObject).forEach((obj) => {
      //   obj == canvasId ?
      //     (this.canvasObject[obj].open = !this.canvasObject[obj].open) :
      //     (this.canvasObject[obj].open = false);
      // });

      const refContainer = [this.$refs.obj1, this.$refs.obj2, this.$refs.obj3, this.$refs.obj4]
      const padding = 1 //3
      const navHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'))
      const height = this.$refs.canvasArea.getBoundingClientRect().height

      //// TODO:  Add Padding to width/height calculations. + Fix "when fast toggling" canvas animation
      //// TODO:  strange bug, if window.width < 768 canvas not reacting, GL context lost?!?! but only afte breakpoint?

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

        this.$nextTick(() => {

        })
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

    // disable rubberband effect on mobile devices
    // document.getElementById('glcanvas').addEventListener('touchmove', (e) => {
    //   e.preventDefault();
    // }, false);
    window.addEventListener('resize', debounce(this.resizeCanvases, 100))

    function patchInitialized(patch) {
      // You can now access the patch object (patch), register variable watchers and so on
    }

    const patchFinishedLoading = (id) => {
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
      for (var i = 0; i < 4; i++) {
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
$nav-height: 64px;
:root {
    --nav-height: #{$nav-height};
}

.outer-flex {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-height: 100vh;
    @include fill-height-and-width;
    .canvas-area {
        flex: 1 100%;
        //background: pink;
        min-height: calc(100vh - #{$nav-height});
        max-height: calc(100vh - #{$nav-height});
        @include fill-height-and-width;
        .inner-flex {
            display: flex;
            flex-wrap: wrap;
            height: 100%;
            justify-content: space-between;

        }
        .flex-item {
            position: relative;
            flex: 0 50%;
            width: 50%;
            height: 50%;
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
                background: transparent;
                position: absolute;
                width: 150px;
                height: 150px;
                transition: all 1s ease;
            }
            &:not(.open).cross:nth-child(1):before {
                bottom: 0;
                right: 0;
                border-radius: 100% 0 0 0;
                border-right: none;
                border-bottom: none;
            }
            &:not(.open).cross:nth-child(2):before {
                border-left: none;
                border-bottom: none;

                bottom: 0;
                left: 0;
                border-radius: 0 100% 0 0;

            }
            &:not(.open).cross:nth-child(3):before {
                border-right: none;
                border-top: none;
                top: 0;
                right: 0;
                border-radius: 0 0 0 100%;
            }
            &:not(.open).cross:nth-child(4):before {
                border-left: none;
                border-top: none;
                border-radius: 0 0 100% 0;

            }
            @for $i from 1 through 4 {
                &:not(.open).cross:nth-child(#{$i}):hover:before {
                    // border-color: black;
                    // border: 2px black solid;
                }
            }

        }
    }
    .navigation-area {
        //  background-color: green;
        width: 100%;
        height: $nav-height;
        min-height: $nav-height;
        border-top: $borderstyle;
        .navigation-wrapper {
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
        }
    }

}

.canvas-info {
    position: absolute;
    top: 0;
    color: white;
    width: 100%;
    pointer-events: none;
    justify-content: space-between;
    display: flex;
    padding: 1rem;
    opacity: 0;
    transition: 1s opacity ease;
    line-height: 1;
}
.fullscreen-button {
    pointer-events: all;
    cursor: pointer;
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
