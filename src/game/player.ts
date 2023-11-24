import { Direction, move } from './move'

export interface Player {
  x: number
  y: number
}

let _player: Player

export function setupPlayer(player: Player) {
  _player = player
}

export function getPlayer() {
  return _player
}

export function updatePlayer({ x, y }: { x: number; y: number }) {
  _player.x = x
  _player.y = y
}

export function moveUp() {
  move(Direction.UP)
}

export function moveDown() {
  move(Direction.DOWN)
}

export function moveLeft() {
  move(Direction.LEFT)
}

export function moveRight() {
  move(Direction.RIGHT)
}
