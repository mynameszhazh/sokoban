import {
  type Position,
  calcDownPosition,
  calcLeftPosition,
  calcRightPosition,
  calcUpPosition
} from '@/composables/position'
import { getPlayer } from './player'
import { collisionCargo, collisionWall } from './collisionDetection'
import { getCargoByPosition } from './cargo'

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

  // 是否碰撞箱子
  const cargo = getCargoByPosition(calcPositionFn(player))

  if (cargo) {
    // 看看是不是墙
    if (collisionWall(calcPositionFn(cargo))) {
      return
    }

    // 看看是不是箱子
    if (collisionCargo(calcPositionFn(cargo))) {
      return
    }

    cargo[dirPropName] += 1 * dir

    // 放在了放置点上

    // 判断是否游戏完成
  }

  player[dirPropName] += 1 * dir
}
