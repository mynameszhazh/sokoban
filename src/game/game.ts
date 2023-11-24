import { updataMap, updateCargos, updatePlacePoint } from '.'
import { gameDatas } from './data/gameData'
import { updatePlayer } from './player'

export function startGame() {
  updataMap(gameDatas[0].map)
  updatePlayer(gameDatas[0].player)
  updateCargos(gameDatas[0].cargos)
  updatePlacePoint(gameDatas[0].placePoints)
}