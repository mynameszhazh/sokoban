import {
  isAllCargoOnTarget,
  updataMap,
  updateCargos,
  updatePlacePoints
} from '.'
import { gameDatas } from './data/gameData'
import { updatePlayer } from './player'

export interface Game {
  currentLevel: number
  isWin: boolean
}

let _game: Game

export function setupGame(game: Game) {
  _game = game
}

export function createGame(config: { level: number }) {
  return {
    currentLevel: config.level,
    isWin: false
  }
}

export function getGame() {
  return _game
}

export function updateGame() {
  let data = gameDatas[_game.currentLevel - 1]

  updataMap(data.map)
  updatePlayer(data.player)
  updateCargos(data.cargos)
  updatePlacePoints(data.placePoints)
}

export function startNextLevel() {
  _game.currentLevel += 1
  resetGame()
  updateGame()
}

function resetGame() {
  _game.isWin = false
}

export function startGame() {
  updateGame()
}

export function judgeGameWin() {
  _game.isWin = isAllCargoOnTarget()
}
