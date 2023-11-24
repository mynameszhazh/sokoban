import { generateId } from '@/utils/id'
import { PlacePoint } from '.'

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
