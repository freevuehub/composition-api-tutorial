<template>
  <lottie
    :path="path"
    loop
    auto-play
    :speed="1"
    :width="width"
    :height="height"
    @AnimControl="setAnimController"
  />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import LottieAnimation from 'lottie-vuejs/src/LottieAnimation.vue'

export default defineComponent({
  components: {
    lottie: LottieAnimation,
  },
  props: {
    path: {
      type: String,
      default: '',
    },
    speed: {
      type: Number,
      default: 1,
    },
    width: {
      type: Number,
      default: 253,
    },
    height: {
      type: Number,
      default: 253,
    },
  },
  setup(_, { emit }) {
    const setAnimController = (event: any) => {
      emit('load', event)
    }

    return {
      setAnimController,
    }
  },
})
</script>
