import { ref } from 'vue';
import { TileType } from './tile.ts'



export interface EditElement {
  type: TileType | 'cargo' | 'placePoint' | 'keeper';
  title: string;
  imgSrc: string;
}

export const currentSelectedEditElement = ref<EditElement>()

export function setcurrentSelectedEditElement(element: EditElement) {
  currentSelectedEditElement.value = element
}