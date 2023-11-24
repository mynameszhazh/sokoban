import { updataMap, updateCargos, updatePlacePoints } from '.'
import { gameDatas } from './data/gameData'
import { updatePlayer } from './player'

export function startGame() {
  let data = gameDatas[2]
  updataMap(data.map)
  updatePlayer(data.player)
  updateCargos(data.cargos)
  updatePlacePoints(data.placePoints)
}
