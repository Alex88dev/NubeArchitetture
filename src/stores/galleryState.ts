import { reactive } from 'vue'

// Definisci un tipo che rappresenti lo stato della galleria
export interface GalleryState {
  selectedGallery: string
  totalImages: number
}

// Crea lo stato reattivo con il tipo definito
export const galleryState: GalleryState = reactive({
  selectedGallery: '',
  totalImages: 0
})
