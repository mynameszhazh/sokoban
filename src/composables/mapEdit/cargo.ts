import { reactive } from 'vue'
import { EditElement, OtherEditType } from './editElement'
import { generateId } from '@/utils/id'
import { EditElementImgSource } from '../img'

export interface Cargo {
  id: number
  x: number
  y: number
  data?: EditElement
}

export const cargoEditElement: EditElement = {
  type: OtherEditType.CARGO,
  title: '箱子',
  imgSrc: EditElementImgSource.CARGO
}

const cargos = reactive<Cargo[]>([])

// todo 类型声明优化
function createCargo(x: number, y: number): any {
  return {
    x: x,
    y: y,
    id: generateId(),
    data: cargoEditElement
  }
}

export const useCargo = () => {
  function isExsitCorgo(x: number, y: number) {
    for (const corgo of cargos) {
      if (corgo.x === x && corgo.y === y) {
        return false
      }
    }
    return true
  }

  function removeCargo(cargo: Cargo) {
    const cargoIndex = cargos.findIndex((c) => c.id === cargo.id)

    if (cargoIndex !== -1) cargos.splice(cargoIndex, 1)
  }

  function addCorgo(x: number, y: number) {
    if (isExsitCorgo(x, y)) {
      cargos.push(createCargo(x, y))
    }
  }

  function reset() {
    cargos.length = 0
  }

  return {
    cargos,
    reset,
    addCorgo,
    removeCargo
  }
}
