import WallImg from '@/assets/wall.png'
import FloorImg from '@/assets/floor.png'
import { EditElementType, type EditElement } from './editElement.ts'

export enum TileType {
  wall = 1,
  floor = 2,
}

interface TileEditElement extends EditElement {
  type: TileType
}

export const tileEditElements: TileEditElement[] = [
  {
    type: TileType.floor,
    title: '地板',
    imgSrc: FloorImg,
  },
  {
    type: TileType.wall,
    title: '墙',
    imgSrc: WallImg,
  }
]


export function isTile(element: EditElement): element is EditElement {
  return element.type === TileType.floor || element.type === TileType.wall
}

export function isFloorByType(type: EditElementType): type is EditElementType {
  return type === TileType.floor
}