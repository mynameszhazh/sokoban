import { reactive } from "vue";

import { TileType } from "./tile";

const data = [
  [1, 1, 1, 1],
  [1, 2, 1, 1],
  [1, 1, 0, 1],
  [1, 1, 0, 1]
]

type MapType = TileType | undefined;

export interface MapBlock {
  type: MapType;
  x: number;
  y: number;
  id: number;
}

export interface Map {
  row: number;
  col: number;
  data: MapBlock[][];
}

/**
 * 响应式数据的魅力
 */
const map = reactive<Map>({
  row: 0,
  col: 0,
  data: []
})

export function useMap() {

  function genData(): MapBlock[][] {
    const mapData: MapBlock[][] = []
    for (let i = 0; i < data.length; i++) {
      const row: MapBlock[] = []
      for (let j = 0; j < data[i].length; j++) {
        row.push({
          type: data[i][j],
          x: j,
          y: i,
          id: i * data[i].length + j
        })
      }
      mapData.push(row)
    }
    return mapData
  }

  function initMap() {
    map.row = data.length
    map.col = data[0].length
    map.data = genData()
  }

  return {
    map,
    initMap,
  }
}

