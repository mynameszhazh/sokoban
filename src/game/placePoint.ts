import { type Position } from '@/composables/position'
import { generateId } from '@/utils/id'

export interface PlacePoint {
  x: number
  y: number
  id: string
}

let _placePoints: PlacePoint[] = []

export function setupPlacePoints(placePoints: PlacePoint[]) {
  _placePoints = placePoints
}

export function updatePlacePoints(rawPlacePoints: { x: number; y: number }[]) {
  rawPlacePoints.forEach((rawPlacePoint) => {
    _placePoints.push(createPlacePoint(rawPlacePoint.x, rawPlacePoint.y))
  })
}

function createPlacePoint(x: number, y: number): PlacePoint {
  return {
    x,
    y,
    id: generateId()
  }
}

export function createPlacePoints(
  rawPlacePoints: { x: number; y: number }[]
): PlacePoint[] {
  return rawPlacePoints.map((rawPlacePoint) => {
    return createPlacePoint(rawPlacePoint.x, rawPlacePoint.y)
  })
}

export function getPointByPosition(position: Position) {
  return _placePoints.find((point) => {
    return point.x === position.x && point.y === position.y
  })
}
