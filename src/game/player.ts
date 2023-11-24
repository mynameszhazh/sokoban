export interface Player {
  x: number
  y: number
}

let _player: Player

export function setupPlayer(player: Player) {
  _player = player
}

export function updatePlayer({ x, y }: { x: number; y: number }) {
  _player.x = x
  _player.y = y
}

export function moveUp() {
  _player.y--
}

export function moveDown() {
  _player.y++
}

export function moveLeft() {
  _player.x--
}

export function moveRight() {
  _player.x++
}
