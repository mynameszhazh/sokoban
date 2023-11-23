import { ref } from 'vue'
import { OtherEditType, TileType } from '../type'


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

export { OtherEditType }
