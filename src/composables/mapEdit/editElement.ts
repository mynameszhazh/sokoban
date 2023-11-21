import { ref } from 'vue'
import { TileType } from './tile'

export enum OtherEditType {
  CARGO = 'cargo',
  PLACE_POINT = 'placePoint',
  KEEPER = 'keeper'
}

export type EditElementType = TileType | OtherEditType | undefined

export interface EditElement {
  type: EditElementType
  title: string
  imgSrc: string
}

export const currentSelectedEditElement = ref<EditElement>()

export function setcurrentSelectedEditElement(element: EditElement) {
  currentSelectedEditElement.value = element
}
