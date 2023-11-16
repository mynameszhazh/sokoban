import { ref } from 'vue';
import { TileType } from './tile.ts'

export interface EditElement {
  type: TileType | 'cargo' | 'placePoint' | 'keeper';
  title: string;
  imgSrc: string;
}

export const currentSelectEditElement = ref<EditElement>()

export function setCurrentSelectEditElement(element: EditElement) {
  currentSelectEditElement.value = element
}