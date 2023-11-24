import { getCargoByPosition } from './cargo'
import { getElementByPosition } from './map'
import { type Position } from '../composables/position'
import { TileType } from '@/composables/type'

export function collisionWall(position: Position) {
  const element = getElementByPosition(position)

  if (element.name === TileType.WALL) {
    return true
  }

  return false
}

export function collisionCargo(position: Position) {
  const cargo = getCargoByPosition(position)

  return !!cargo
}
