<script lang="ts">
import { defineComponent, ref, watchEffect, inject } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
// import type { GalleryState } from '@/stores/galleryState'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    folderName: {
      type: String,
      required: true
    },
    totalImages: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    // const galleryState = inject('galleryState') as GalleryState
    const images = ref<string[]>([])

    watchEffect(() => {
      images.value = []
      const baseImagePath = `/src/assets/img/${props.folderName}/${props.folderName}-`
      for (let i = 1; i <= props.totalImages; i++) {
        images.value.push(`${baseImagePath}${i}.webp`)
      }
      // console.log(galleryState.selectedGallery)
    })

    return {
      images,
      modules: [Autoplay, Pagination, Navigation]
    }
  }
})
</script>

<template>
  <swiper
    :lazy="true"
    :loop="true"
    :centeredSlides="true"
    :pagination="{
      type: 'progressbar',
      clickable: true
    }"
    :navigation="false"
    :grabCursor="true"
    :modules="modules"
    class="main-swiper"
  >
    <swiper-slide v-for="(image, index) in images" :key="index">
      <img :src="image" alt="" />
    </swiper-slide>
  </swiper>
</template>

<!-- :autoplay="{
      delay: 3500,
      disableOnInteraction: false
    }" -->

<style lang="sass">
$layout-breakpoint-small-desk: 992px //Large  -->  lg

.main-swiper
  height: 100%
  .swiper-wrapper
    .swiper-slide
      display: flex
      justify-content: center
      align-content: center
      flex-wrap: wrap
      img
        @media (min-width: $layout-breakpoint-small-desk)
          width: auto !important
          height: 100%
  .swiper-pagination
    position: fixed
    background: transparent
    .swiper-pagination-progressbar-fill
      background: #000
</style>
