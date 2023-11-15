import WallImg from '@/assets/wall.png'
import FloorImg from '@/assets/floor.png'

export enum TileType {
  wall = 1,
  floor = 2,
}

type MapElementTyep = {
  type: number;
  name: string;
  img: string;
  // id: number;
}

const wallElement = {
  type: TileType.wall,
  name: '墙',
  img: WallImg,
}

const floorElement = {
  type: TileType.floor,
  name: '地板',
  img: FloorImg,
}

export const tileElements: MapElementTyep[] = [wallElement, floorElement]

