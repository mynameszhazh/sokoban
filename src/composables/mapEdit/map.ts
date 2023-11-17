import { reactive } from "vue";

import { TileType } from "./tile";
import { generateId } from "@/utils/id";

// const data = [
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0]
// ]

type MapType = TileType | undefined;

export interface MapBlock {
  type: MapType;
  x: number;
  y: number;
  id: number | string;
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

function createMapBlock(x: number, y: number, type?: MapType): MapBlock {
  return {
    type,
    x,
    y,
    id: generateId(),
  };
}


export function useMap() {

  function initMap() {
    for (let i = 0; i < map.row; i++) {
      map.data[i] = []
      for (let j = 0; j < map.col; j++) {
        const block = createMapBlock(j, i)
        map.data[i].push(block)
      }
    }
  }

  function updateMapRow(newRow: number) {
    if (newRow < 0) return
    const oldRow = map.row
    const addRowCount = newRow - oldRow
    if (addRowCount > 0) {
      for (let i = 0; i < addRowCount; i++) {
        const newRowData: MapBlock[] = []
        map.data.push(newRowData)

        // 在把新的行填满
        let col = map.data[i].length;

        for (let j = 0; j < col; j++) {
          const block = createMapBlock(j, oldRow + i)
          newRowData.push(block)
        }
      }
    } else {
      // 删除多余的
      for (let i = 0; i < Math.abs(addRowCount); i++) {
        map.data.pop()
      }
    }

    map.row = newRow
  }

  function updateMapCol(newCol: number) {
    if (newCol < 0) return
    const oldCol = map.col
    const addColCount = newCol - oldCol
    if (addColCount > 0) {
      for (let i = 0; i < map.row; i++) {
        for (let j = 0; j < addColCount; j++) {
          const block = createMapBlock(oldCol + j, i)
          map.data[i].push(block)
        }
      }
    } else {
      for (let i = 0; i < map.row; i++) {
        for (let j = 0; j < Math.abs(addColCount); j++) {
          map.data[i].pop()
        }
      }
    }
    map.col = newCol
  }

  return {
    map,
    updateMapRow,
    updateMapCol,
    initMap,
  }
}

