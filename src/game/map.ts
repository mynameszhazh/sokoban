import { TileType } from '@/composables/type'
import { Floor } from './dao/Floor'
import { Wall } from './dao/Wall'
import { Position } from '@/composables/position'

export type Element = Floor | Wall
export interface Map {
  data: Element[][]
}

let _map: Map

export function setupMap(map: Map) {
  _map = map
}

export function updataMap(rawMap: number[][]) {
  _map.data = convertRawMap(rawMap)
}

export function getElementByPosition(position: Position) {
  return _map.data[position.y][position.x]
}

function convertRawMap(rawMap: number[][]): Element[][] {
  const newMap: Element[][] = []
  rawMap.forEach((row, i) => {
    newMap[i] = []
    row.forEach((col, j) => {
      if (col === TileType.WALL) {
        newMap[i][j] = new Wall()
      } else if (col === TileType.FLOOR) {
        newMap[i][j] = new Floor()
      }
    })
  })

  return newMap
}
