export interface PlacePoint {
  x: number
  y: number
  id: string
}

export interface PlacePoints {
  data: PlacePoint[]
}
// ? 这里需要也需要类来执行操作吗

let _placePoints: PlacePoints

export function setupPlacePoints(placePoints: PlacePoints) {
  _placePoints = placePoints
}

export function updatePlacePoint(placePoints: { x: number; y: number }[]) {
  _placePoints.data = cover(placePoints)
}

function cover(placePoints: { x: number; y: number }[]): PlacePoint[] {
  return placePoints.map((placePoint) => {
    return {
      x: placePoint.x,
      y: placePoint.y,
      id: `${placePoint.x}-${placePoint.y}`
    }
  })
}
