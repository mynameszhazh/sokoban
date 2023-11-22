import { reactive } from 'vue'
import { EditElement, OtherEditType } from './editElement'
import { generateId } from '@/utils/id'
import { ImgSource } from '../img'

export interface PlacePoint {
  id: number
  x: number
  y: number
  data?: EditElement
}

export const placePointEditElement: EditElement = {
  type: OtherEditType.PLACE_POINT,
  title: '放置点',
  imgSrc: ImgSource.PLACE_POINT
}

const placePoints = reactive<PlacePoint[]>([])

// todo 类型声明优化
function createPlacePoint(x: number, y: number): any {
  return {
    x: x,
    y: y,
    id: generateId(),
    data: placePointEditElement
  }
}

export const usePlacePoint = () => {
  function isExsitPlacePoint(x: number, y: number) {
    for (const item of placePoints) {
      if (item.x === x && item.y === y) {
        return false
      }
    }
    return true
  }

  function removePlacePoint(placePoint: PlacePoint) {
    const placePointIndex = placePoints.findIndex((c) => c.id === placePoint.id)

    if (placePointIndex !== -1) placePoints.splice(placePointIndex, 1)
  }

  function addPlacePoint(x: number, y: number) {
    if (isExsitPlacePoint(x, y)) {
      const placePoint = createPlacePoint(x, y)
      placePoints.push(placePoint)
      return placePoint
    }
    return null
  }

  function reset() {
    placePoints.length = 0
  }

  return {
    placePoints,
    reset,
    addPlacePoint,
    removePlacePoint
  }
}
