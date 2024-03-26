<script lang="ts">
import { defineComponent, inject } from 'vue'
import { useRouter } from 'vue-router'
import type { GalleryState } from 'src/stores/galleryState'
export default defineComponent({
  components: {},
  setup() {
    const router = useRouter()
    const galleryState = inject('galleryState') as GalleryState

    const toggleMenu = () => {
      const menuContainer: HTMLElement | null = document.getElementById('menu-container')
      menuContainer?.classList.toggle('active')
    }

    const navigateToGallery = (galleryName: string, totalImages: number) => {
      if (galleryState) {
        galleryState.selectedGallery = galleryName
        galleryState.totalImages = totalImages
        router.push({ name: 'home', query: { gallery: galleryName, totalImages: totalImages } })
      }
    }

    return {
      toggleMenu,
      navigateToGallery
    }
  }
})
</script>

<template>
  <header class="flex -mx-2 h-12 items-center pt-4 sm:pt-0">
    <div class="w-4/12 sm:w-1/12 px-2">
      <div class="wrapper w-full mx-auto">
        <RouterLink to="/">
          <img src="../assets/logo_nube.svg" class="w-full" alt="" role="button" />
        </RouterLink>
      </div>
    </div>
    <div class="grid w-11/12 px-2 hidden sm:block">
      <div class="w-w-12/12 justify-self-end">
        <div class="flex -mx-2">
          <div class="w-11/12 flex -mx-2 px-2">
            <div
              class="w-1/3 px-2 whitespace-nowrap text-center"
              role="button"
              @click="navigateToGallery('architettura', 20)"
            >
              Architetture
            </div>
            <div
              class="w-1/3 px-2 whitespace-nowrap text-center"
              role="button"
              @click="navigateToGallery('art-direction', 49)"
            >
              Art-Direction
            </div>
            <div
              class="w-1/3 px-2 whitespace-nowrap text-center"
              role="button"
              @click="navigateToGallery('research', 7)"
            >
              Research
            </div>
          </div>

          <div class="w-1/12 relative self-center grid">
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
  </header>
</template>

<style lang="sass" scoped>
#menu-container
  display: none
  &.active
    display: block
</style>
