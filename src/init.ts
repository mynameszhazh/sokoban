import { setCssVar } from "./utils/css";
import setting from './setting.ts'

const { MAP_BLOCK_SIZE } = setting

// 初始化 地图块大小
setCssVar('--map-block-size', MAP_BLOCK_SIZE + 'px')
