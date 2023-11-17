import { ref } from 'vue';
import { MapType } from './map';

export type EditElementType = MapType | 'cargo' | 'placePoint' | 'keeper';

export interface EditElement {
  type: EditElementType;
  title: string;
  imgSrc: string;
}

export const currentSelectedEditElement = ref<EditElement>()

export function setcurrentSelectedEditElement(element: EditElement) {
  currentSelectedEditElement.value = element
}