import {
  type Position,
  calcDownPosition,
  calcLeftPosition,
  calcRightPosition,
  calcUpPosition
} from '@/composables/position'
import { getPlayer } from './player'
import { collisionWall } from './collisionDetection'

export enum Direction {
  LEFT = 'left',
  RIGHT = 'right',
  UP = 'up',
  DOWN = 'down'
}

const map: Record<
  string,
  {
    calcPositionFn: (position: Position) => Position
    dirPropName: 'x' | 'y'
    dir: -1 | 1
  }
> = {
  left: { calcPositionFn: calcLeftPosition, dirPropName: 'x', dir: -1 },
  right: { calcPositionFn: calcRightPosition, dirPropName: 'x', dir: 1 },
  up: { calcPositionFn: calcUpPosition, dirPropName: 'y', dir: -1 },
  down: { calcPositionFn: calcDownPosition, dirPropName: 'y', dir: 1 }
}

export function move(direction: Direction) {
  const player = getPlayer()

  const { calcPositionFn, dirPropName, dir } = map[direction]

  // 是否碰撞墙壁
  if (collisionWall(calcPositionFn(player))) return

  player[dirPropName] += 1 * dir
}
