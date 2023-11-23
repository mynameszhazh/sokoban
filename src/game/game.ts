import { updataMap } from '.'
import { gameDatas } from './data/gameData'

export function startGame() {

  updataMap(gameDatas[0].map)
}
