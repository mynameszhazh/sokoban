import { reactive } from "vue"
// import { TileType } from "./tile";

const data = [
  [1, 1, 1],
  [1, 2, 1],
  [1, 1, 3]
]

// type MapType = TileType | undefined;

// export interface MapBlock {
//   type: MapType;
//   x: number;
//   y: number;
//   id: number;
// }

interface Map {
  row: number;
  col: number;
  // data: MapBlock[][];
  data: number[][];
}

export function useMap() {

  const map = reactive<Map>({
    row: 0,
    col: 0,
    data: []
  })

  function initMap() {
    map.row = data.length
    map.col = data[0].length
    map.data = data
  }

  return {
    map,
    initMap
  }
}