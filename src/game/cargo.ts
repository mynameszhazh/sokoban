import { generateId } from '@/utils/id'
import { PlacePoint, getPointByPosition } from '.'
import { Position } from '@/composables/position'

export interface Cargo {
  x: number
  y: number
  id: string
  onTargetPoint?: PlacePoint | undefined
}

// ? 这里需要也需要类来执行操作吗

let _cargos: Cargo[] = []

export function setupCargos(cargos: Cargo[]) {
  _cargos = cargos
}

export function updateCargos(rawCargos: { x: number; y: number }[]) {
  rawCargos.forEach((rawCargo) => {
    _cargos.push(createCargo(rawCargo.x, rawCargo.y))
  })
}

function createCargo(x: number, y: number): Cargo {
  return {
    x,
    y,
    id: generateId()
  }
}

export function createCargos(rawCargos: { x: number; y: number }[]): Cargo[] {
  return rawCargos.map((rawCargo) => {
    return createCargo(rawCargo.x, rawCargo.y)
  })
}

export function getCargoByPosition(position: Position) {
  return _cargos.find((c) => {
    return c.x === position.x && c.y === position.y
  })
}

function reset(cargo: Cargo) {
  if (cargo.onTargetPoint) {
    cargo.onTargetPoint = undefined
  }
}

export function handleHitPlacePoint(cargo: Cargo) {
  reset(cargo)

  const point = getPointByPosition(cargo)

  if (point) {
    cargo.onTargetPoint = point
  }
}
