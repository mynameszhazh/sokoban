import { ref } from 'vue'

const gameDatas = [
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 2, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 2, 1],
      [1, 1, 2, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 2, 1],
      [1, 1, 1, 1, 1, 1, 1, 1]
    ],
    player: {
      x: 2,
      y: 4
    },
    cargos: [
      {
        x: 4,
        y: 4
      }
    ],
    placePoints: [
      {
        x: 6,
        y: 4
      }
    ]
  }
]

const currentGameLevel = ref(0)

export function useMap() {
  function updateGame() {}

  function nextGame() {}

  function getCurrentGameData() {
    const currentData = gameDatas[currentGameLevel.value]
    return {
      map: currentData.map,
      player: currentData.player,
      cargos: currentData.cargos,
      placePoints: currentData.placePoints
    }
  }

  const isWin = false

  return {
    currentGameLevel,
    isWin,

    getCurrentGameData,
    nextGame,
    updateGame
  }
}
