import { ImgSource } from '../img.ts'
import { TileType } from '../type.ts'
import { EditElementType, type EditElement } from './editElement.ts'



interface TileEditElement extends EditElement {
  type: TileType
}

export const tileEditElements: TileEditElement[] = [
  {
    type: TileType.FLOOR,
    title: '地板',
    imgSrc: ImgSource.FLOOR
  },
  {
    type: TileType.WALL,
    title: '墙',
    imgSrc: ImgSource.WALL
  }
]

export function isTile(element: EditElement): element is EditElement {
  return element.type === TileType.FLOOR || element.type === TileType.WALL
}

export function isFloorByType(type: EditElementType): type is EditElementType {
  return type === TileType.FLOOR
}
