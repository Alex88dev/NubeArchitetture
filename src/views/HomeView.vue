<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import MainSwiper from '../components/MainSwiper.vue'
export default defineComponent({
  components: {
    MainSwiper
  },
  props: {
    gallery: String
  },
  setup(props) {
    const folderName = ref(props.gallery || 'architettura') // Usa props.gallery come valore di default se presente
    const totalImages = ref(20) // Potresti voler aggiornare questo basandoti sulla galleria
    const selectedCta = ref(props.gallery || 'architettura')

    const setGallery = (name: string, total: number) => {
      selectedCta.value = name
      folderName.value = name
      totalImages.value = total
    }
    // Funzione toggleMenu definita all'interno di setup
    const toggleMenu = () => {
      const menuContainer: HTMLElement | null = document.getElementById('menu-container')
      menuContainer?.classList.toggle('active')
    }

    onMounted(() => {
      if (props.gallery) {
        const imagesCount = determineImagesCount(props.gallery)
        setGallery(props.gallery, imagesCount)
      }
    })

    return {
      toggleMenu,
      folderName,
      totalImages,
      setGallery,
      selectedCta
    }
  }
})

function determineImagesCount(galleryName: string | undefined) {
  switch (galleryName) {
    case 'architettura':
      return 20
    case 'art-direction':
      return 49
    case 'research':
      return 7
    default:
      return 20
  }
}
</script>

<template>
  <div class="flex flex-col md:flex-row flex-wrap -mx-2 h-screen items-center py-6 justify-between">
    <div class="w-full flex sm:w-1/12 px-2 mb-4 md:mb-0">
      <div class="w-4/12 sm:w-full wrapper md:mx-auto">
        <RouterLink to="/">
          <img src="../assets/logo_nube.svg" class="w-full" alt="" role="button" />
        </RouterLink>
      </div>
      <div class="w-8/12 flex justify-end sm:hidden">
        <span class="me-4"><RouterLink to="/about">About</RouterLink></span>
        <span><RouterLink to="/contact">Contact</RouterLink></span>
      </div>
    </div>

    <div class="w-full sm:w-7/12 px-2 swiper-column">
      <MainSwiper :folderName="folderName" :totalImages="totalImages" />
    </div>

    <div class="w-full sm:w-4/12 px-2">
      <div class="flex -mx-2">
        <div class="w-full sm:w-11/12 flex -mx-2 px-2" id="cta-wrapper">
          <div
            v-for="galleryName in ['architettura', 'art-direction', 'research']"
            :key="galleryName"
            class="w-1/3 px-2 whitespace-nowrap text-center underline-offset-8 capitalize cta-swiper"
            :class="{ underline: selectedCta === galleryName }"
            role="button"
            @click="
              setGallery(
                galleryName,
                galleryName === 'architettura' ? 20 : galleryName === 'art-direction' ? 49 : 7
              )
            "
          >
            {{ galleryName }}
          </div>
        </div>

        <div class="w-1/12 relative self-center grid hidden sm:block">
          <img
            src="../assets/menu-toogle.webp"
            class="w-full justify-self-end"
            alt=""
            role="button"
            id="main-menu-toggle"
            @click="toggleMenu()"
          />
          <div class="absolute border p-2 pe-8 mt-7 right-0" id="menu-container">
            <ul>
              <li><RouterLink to="/about">About</RouterLink></li>
              <li><RouterLink to="/contact">Contact</RouterLink></li>
            </ul>
            <div class="absolute top-0 right-0" @click="toggleMenu()">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x"
                role="button"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>

$layout-breakpoint-small-desk: 992px //Large  -->  lg

.swiper-column
  @media (min-width: $layout-breakpoint-small-desk)
    height: 90vh

#menu-container
  display: none
  &.active
    display: block
</style>
