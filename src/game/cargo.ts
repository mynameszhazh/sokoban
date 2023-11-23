export interface Cargo {
  x: number
  y: number
  id: string
  onTargetPoint: false
}
export interface Cargos {
  data: Cargo[]
}
// ? 这里需要也需要类来执行操作吗

let _cargos: Cargos

export function setupCargos(cargos: Cargos) {
  _cargos = cargos
}

export function updateCargos(cargos: { x: number; y: number }[]) {
  _cargos.data = cover(cargos)
}

function cover(cargos: { x: number; y: number }[]): Cargo[] {
  return cargos.map((cargo) => {
    return {
      x: cargo.x,
      y: cargo.y,
      id: `${cargo.x}-${cargo.y}`,
      onTargetPoint: false
    }
  })
}
